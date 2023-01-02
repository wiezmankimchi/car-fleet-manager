/*
  Warnings:

  - You are about to drop the `car` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `driver` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userCompany` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "car" DROP CONSTRAINT "car_companyId_fkey";

-- DropForeignKey
ALTER TABLE "car" DROP CONSTRAINT "car_driverId_fkey";

-- DropForeignKey
ALTER TABLE "car" DROP CONSTRAINT "car_makeId_fkey";

-- DropForeignKey
ALTER TABLE "driver" DROP CONSTRAINT "driver_companyId_fkey";

-- DropForeignKey
ALTER TABLE "userCompany" DROP CONSTRAINT "userCompany_companyId_fkey";

-- AlterTable
ALTER TABLE "CarModelMake" ADD COLUMN     "userId" INTEGER;

-- DropTable
DROP TABLE "car";

-- DropTable
DROP TABLE "driver";

-- DropTable
DROP TABLE "userCompany";

-- CreateTable
CREATE TABLE "Driver" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "companyId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),
    "createdBy" INTEGER DEFAULT 0,
    "updatedBy" INTEGER,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "registrtion" TEXT NOT NULL,
    "regDate" TIMESTAMP(3) NOT NULL,
    "makeId" INTEGER NOT NULL,
    "driverId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),
    "createdBy" INTEGER DEFAULT 0,
    "updatedBy" INTEGER,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCompany" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),
    "createdBy" INTEGER DEFAULT 0,
    "updatedBy" INTEGER,

    CONSTRAINT "UserCompany_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CarModelMake" ADD CONSTRAINT "CarModelMake_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarModelMake" ADD CONSTRAINT "CarModelMake_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarModelMake" ADD CONSTRAINT "CarModelMake_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_makeId_fkey" FOREIGN KEY ("makeId") REFERENCES "CarModelMake"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCompany" ADD CONSTRAINT "UserCompany_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
