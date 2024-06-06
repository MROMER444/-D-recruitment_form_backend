/*
  Warnings:

  - You are about to drop the column `photo` on the `Information` table. All the data in the column will be lost.
  - You are about to drop the column `resume` on the `Information` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Information` DROP COLUMN `photo`,
    DROP COLUMN `resume`;
