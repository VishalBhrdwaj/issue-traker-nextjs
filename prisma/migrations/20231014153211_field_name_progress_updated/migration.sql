/*
  Warnings:

  - The values [IN_PROGESS] on the enum `Issues_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Issues` MODIFY `status` ENUM('OPEN', 'IN_PROGRESS', 'CLOSED') NOT NULL DEFAULT 'OPEN';
