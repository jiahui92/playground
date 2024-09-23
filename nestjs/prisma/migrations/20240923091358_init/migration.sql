-- CreateTable
CREATE TABLE `user` (
    `id` CHAR(36) NOT NULL,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `roles` JSON NOT NULL,
    `isActive` BOOLEAN NULL DEFAULT true,
    `createdAt` TIMESTAMP(0) NULL,
    `updatedAt` TIMESTAMP(0) NULL,

    UNIQUE INDEX `idx_unique_username`(`username`),
    UNIQUE INDEX `idx_unique_email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
