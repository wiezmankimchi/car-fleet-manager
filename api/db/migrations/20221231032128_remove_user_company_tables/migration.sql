/*
  Warnings:

  - You are about to drop the `UserCompany` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserCompany" DROP CONSTRAINT "UserCompany_companyId_fkey";

-- DropTable
DROP TABLE "UserCompany";
