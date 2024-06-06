/*
  Warnings:

  - Made the column `photo` on table `Information` required. This step will fail if there are existing NULL values in that column.
  - Made the column `resume` on table `Information` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Information` MODIFY `photo` VARCHAR(191) NOT NULL,
    MODIFY `resume` VARCHAR(191) NOT NULL;
