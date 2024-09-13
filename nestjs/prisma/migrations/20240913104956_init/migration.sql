-- CreateTable
CREATE TABLE `city` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` CHAR(35) NOT NULL,
    `country_code` CHAR(3) NOT NULL,
    `district` CHAR(20) NOT NULL,
    `population` INTEGER NOT NULL DEFAULT 0,

    INDEX `CountryCode`(`country_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `country` (
    `code` CHAR(3) NOT NULL,
    `name` CHAR(52) NOT NULL,
    `continent` ENUM('Asia', 'Europe', 'North America', 'Africa', 'Oceania', 'Antarctica', 'South America') NOT NULL DEFAULT 'Asia',
    `region` CHAR(26) NOT NULL,
    `surface_area` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `indep_year` SMALLINT NULL,
    `population` INTEGER NOT NULL DEFAULT 0,
    `life_expectancy` DECIMAL(3, 1) NULL,
    `GNP` DECIMAL(10, 2) NULL,
    `GNPO_id` DECIMAL(10, 2) NULL,
    `local_name` CHAR(45) NOT NULL,
    `government_form` CHAR(45) NOT NULL,
    `head_of_state` CHAR(60) NULL,
    `capital` INTEGER NULL,
    `code2` CHAR(2) NOT NULL,

    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `country_language` (
    `country_code` CHAR(3) NOT NULL,
    `language` CHAR(30) NOT NULL,
    `is_official` ENUM('T', 'F') NOT NULL DEFAULT 'F',
    `percentage` DECIMAL(4, 1) NOT NULL DEFAULT 0.0,

    INDEX `CountryCode`(`country_code`),
    PRIMARY KEY (`country_code`, `language`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `city` ADD CONSTRAINT `FK_c9a9a12ab44974db2d4a2da9dde` FOREIGN KEY (`country_code`) REFERENCES `country`(`code`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `country_language` ADD CONSTRAINT `FK_4547315e562b849e7ca48e32dfc` FOREIGN KEY (`country_code`) REFERENCES `country`(`code`) ON DELETE NO ACTION ON UPDATE NO ACTION;
