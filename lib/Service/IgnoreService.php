<?php
/*
 * Copyright (c) 2022 The Recognize contributors.
 * This file is licensed under the Affero General Public License version 3 or later. See the COPYING file.
 */

namespace OCA\Recognize\Service;

use OC\Files\Cache\CacheQueryBuilder;
use OC\SystemConfig;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;
use Psr\Log\LoggerInterface;

class IgnoreService {
	private IDBConnection $db;
	private SystemConfig $systemConfig;
	private LoggerInterface $logger;

	public function __construct(IDBConnection $db, SystemConfig $systemConfig, LoggerInterface $logger) {
		$this->db = $db;
		$this->systemConfig = $systemConfig;
		$this->logger = $logger;
	}

	/**
	 * @param int $storageId
	 * @param array $ignoreMarkers
	 * @return list<string>
	 * @throws \OCP\DB\Exception
	 */
	public function getIgnoredDirectories(int $storageId, array $ignoreMarkers): array {
		$qb = new CacheQueryBuilder($this->db, $this->systemConfig, $this->logger);
		$result = $qb->selectFileCache()
			->andWhere($qb->expr()->in('name', $qb->createNamedParameter($ignoreMarkers, IQueryBuilder::PARAM_STR_ARRAY)))
			->andWhere($qb->expr()->eq('storage', $qb->createNamedParameter($storageId, IQueryBuilder::PARAM_INT)))
			->executeQuery();
		/**
		 * @var list<array{path: string}> $ignoreFiles
		 */
		$ignoreFiles = $result->fetchAll();
		return array_map(fn ($file): string => dirname($file['path']), $ignoreFiles);
	}
}
