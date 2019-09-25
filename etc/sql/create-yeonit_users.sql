CREATE TABLE `yeonit`.`yeonit_users` ( `identify` INT(11) NOT NULL AUTO_INCREMENT , `tag` VARCHAR(32) NOT NULL , `name` VARCHAR(64) NOT NULL , `avatar` VARCHAR(256) NOT NULL , `experience` INT(11) NOT NULL , `matchmakingRate` INT(11) NOT NULL DEFAULT '0' , `playedMatches` INT(11) NOT NULL , `createdTime` VARCHAR(32) NOT NULL , `lastSeenTime` VARCHAR(32) NOT NULL , `wonMatches` INT(11) NOT NULL , `defeatMatches` INT(11) NOT NULL , `blocked` TINYINT(1) NOT NULL DEFAULT '0' , `blockedReason` VARCHAR(2048) NOT NULL , `blockedUntil` VARCHAR(32) NOT NULL , `permission` INT(11) NOT NULL , `email` VARCHAR(320) NOT NULL , `status` INT(11) NOT NULL , `mobile` TINYINT(1) NOT NULL DEFAULT '0' , PRIMARY KEY (`identify`)) ENGINE = InnoDB;
ALTER TABLE `yeonit_users` ADD UNIQUE(`identify`);
ALTER TABLE `yeonit_users` ADD `locale` VARCHAR(16) NOT NULL AFTER `mobile`;
ALTER TABLE `yeonit_users` ADD `provider` VARCHAR(32) NOT NULL AFTER `locale`;
ALTER TABLE `yeonit_users` ADD `providerIdentify` VARCHAR(32) NOT NULL AFTER `provider`;
ALTER TABLE `yeonit_users` DROP `mobile`;
