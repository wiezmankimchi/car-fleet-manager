/*
  Warnings:

  - Added the required column `registrationEndDate` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `registrationImageURL` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `registrationNumber` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Driver" ADD COLUMN     "registrationEndDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "registrationImageURL" TEXT NOT NULL,
ADD COLUMN     "registrationNumber" TEXT NOT NULL;
