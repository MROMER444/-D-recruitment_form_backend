-- CreateTable
CREATE TABLE `Information` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `Short_Introduction` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `city` ENUM('Baghdad', 'Basra', 'Nineveh', 'AlAnbar', 'Sulaymaniyah', 'Erbil', 'Diyala', 'Karbala', 'Kirkuk', 'Babil', 'Najaf', 'DhiQar', 'Maysan', 'Muthanna', 'Qadisiyyah', 'Wasit', 'Salah_al_Din', 'Dohuk') NOT NULL,
    `field_of_study` VARCHAR(191) NOT NULL,
    `degree` ENUM('Bachelor', 'Master', 'PhD', 'Associate', 'Diploma', 'ertificate') NOT NULL,
    `year_of_experience` DOUBLE NOT NULL,
    `photo` VARCHAR(191) NOT NULL,
    `resume` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
