/*
  Warnings:

  - The primary key for the `UserCredential` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "UserCredential" DROP CONSTRAINT "UserCredential_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserCredential_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "UserCredential_id_seq";
