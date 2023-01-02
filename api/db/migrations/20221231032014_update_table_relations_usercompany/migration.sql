/*
  Warnings:

  - You are about to drop the column `userId` on the `UserCompany` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserCompany" DROP CONSTRAINT "UserCompany_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "UserCompany" DROP CONSTRAINT "UserCompany_updatedBy_fkey";

-- DropForeignKey
ALTER TABLE "UserCompany" DROP CONSTRAINT "UserCompany_userId_fkey";

-- AlterTable
ALTER TABLE "UserCompany" DROP COLUMN "userId";
