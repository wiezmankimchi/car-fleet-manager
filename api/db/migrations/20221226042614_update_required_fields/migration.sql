-- AlterTable
ALTER TABLE "CarModel" ALTER COLUMN "updateAt" DROP NOT NULL,
ALTER COLUMN "createdBy" DROP NOT NULL,
ALTER COLUMN "updatedBy" DROP NOT NULL;

-- AlterTable
ALTER TABLE "CarModelMake" ALTER COLUMN "updateAt" DROP NOT NULL,
ALTER COLUMN "createdBy" DROP NOT NULL,
ALTER COLUMN "updatedBy" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "createdBy" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Role" ALTER COLUMN "updateAt" DROP NOT NULL,
ALTER COLUMN "createdBy" DROP NOT NULL,
ALTER COLUMN "updatedBy" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UserRole" ALTER COLUMN "updateAt" DROP NOT NULL,
ALTER COLUMN "createdBy" DROP NOT NULL,
ALTER COLUMN "updatedBy" DROP NOT NULL;

-- AlterTable
ALTER TABLE "car" ALTER COLUMN "updateAt" DROP NOT NULL,
ALTER COLUMN "createdBy" DROP NOT NULL,
ALTER COLUMN "updatedBy" DROP NOT NULL;

-- AlterTable
ALTER TABLE "driver" ALTER COLUMN "updateAt" DROP NOT NULL,
ALTER COLUMN "createdBy" DROP NOT NULL,
ALTER COLUMN "updatedBy" DROP NOT NULL;

-- AlterTable
ALTER TABLE "userCompany" ALTER COLUMN "updateAt" DROP NOT NULL,
ALTER COLUMN "createdBy" DROP NOT NULL,
ALTER COLUMN "updatedBy" DROP NOT NULL;
