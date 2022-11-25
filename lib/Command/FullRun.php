<?php
/*
 * Copyright (c) 2022 The Recognize contributors.
 * This file is licensed under the Affero General Public License version 3 or later. See the COPYING file.
 */

namespace OCA\Recognize\Command;

use OCA\Recognize\Classifiers\Audio\MusicnnClassifier;
use OCA\Recognize\Classifiers\Images\ClusteringFaceClassifier;
use OCA\Recognize\Classifiers\Images\ImagenetClassifier;
use OCA\Recognize\Classifiers\Images\LandmarksClassifier;
use OCA\Recognize\Classifiers\Video\MovinetClassifier;
use OCA\Recognize\Db\QueueFile;
use OCA\Recognize\Exception\Exception;
use OCA\Recognize\Service\Logger;
use OCA\Recognize\Service\StorageService;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class FullRun extends Command {
	private StorageService $storageService;
	private Logger $logger;
	private ImagenetClassifier $imagenet;
	private ClusteringFaceClassifier $faces;
	private MovinetClassifier $movinet;
	private MusicnnClassifier $musicnn;

	public function __construct(StorageService $storageService, Logger $logger, ImagenetClassifier $imagenet, ClusteringFaceClassifier $faces, MovinetClassifier $movinet, MusicnnClassifier $musicnn) {
		parent::__construct();
		$this->storageService = $storageService;
		$this->logger = $logger;
		$this->imagenet = $imagenet;
		$this->faces = $faces;
		$this->movinet = $movinet;
		$this->musicnn = $musicnn;
	}

	/**
	 * Configure the command
	 *
	 * @return void
	 */
	protected function configure() {
		$this->setName('recognize:full-run')
			->setDescription('Classify all files with the current settings in one go (will likely take a long time)');
	}

	/**
	 * Execute the command
	 *
	 * @param InputInterface  $input
	 * @param OutputInterface $output
	 *
	 * @return int
	 */
	protected function execute(InputInterface $input, OutputInterface $output): int {
		$this->logger->setCliOutput($output);
		$models = [
			ClusteringFaceClassifier::MODEL_NAME,
			ImagenetClassifier::MODEL_NAME,
			LandmarksClassifier::MODEL_NAME,
			MovinetClassifier::MODEL_NAME,
			MusicnnClassifier::MODEL_NAME,
		];

		foreach ($this->storageService->getMounts() as $mount) {
			$this->logger->info('Processing storage ' . $mount['storage_id'] . ' with root ID ' . $mount['override_root']);
			$lastFileId = 0;
			do {
				$i = 0;
				$queues = [
					ImagenetClassifier::MODEL_NAME => [],
					LandmarksClassifier::MODEL_NAME => [],
					ClusteringFaceClassifier::MODEL_NAME => [],
					MovinetClassifier::MODEL_NAME => [],
					MusicnnClassifier::MODEL_NAME => [],
				];
				foreach ($this->storageService->getFilesInMount($mount['storage_id'], $mount['override_root'], $models, $lastFileId) as $file) {
					$i++;
					$queueFile = new QueueFile();
					$queueFile->setStorageId((string)$mount['storage_id']);
					$queueFile->setRootId($mount['root_id']);
					$queueFile->setFileId($file['fileid']);
					$queueFile->setUpdate(false);

					if ($file['image']) {
						if (in_array(ImagenetClassifier::MODEL_NAME, $models)) {
							$queues[ImagenetClassifier::MODEL_NAME][] = $queueFile;
						}
						if (in_array(ClusteringFaceClassifier::MODEL_NAME, $models)) {
							$queues[ClusteringFaceClassifier::MODEL_NAME][] = $queueFile;
						}
					}
					if ($file['video']) {
						$queues[MovinetClassifier::MODEL_NAME][] = $queueFile;
					}
					if ($file['audio']) {
						$queues[MusicnnClassifier::MODEL_NAME][] = $queueFile;
					}
				}

				if (count($queues[ImagenetClassifier::MODEL_NAME]) > 0) {
					$this->imagenet->classify($queues[ImagenetClassifier::MODEL_NAME]);
				}

				if (count($queues[ClusteringFaceClassifier::MODEL_NAME]) > 0) {
					$this->faces->classify($queues[ClusteringFaceClassifier::MODEL_NAME]);
				}

				if (count($queues[MovinetClassifier::MODEL_NAME]) > 0) {
					try {
						$this->movinet->classify($queues[MovinetClassifier::MODEL_NAME]);
					} catch (Exception $e) {
						$this->logger->warning($e->getMessage(), ['exception' => $e]);
					}
				}

				if (count($queues[MusicnnClassifier::MODEL_NAME]) > 0) {
					$this->musicnn->classify($queues[MusicnnClassifier::MODEL_NAME]);
				}
			} while ($i > 0);
		}
		return 0;
	}
}
