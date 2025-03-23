-- CreateEnum
CREATE TYPE "PackageStatus" AS ENUM ('PENDING', 'INTRANSIT', 'DELIVERED');

-- AlterTable
ALTER TABLE "Package" ADD COLUMN     "status" "PackageStatus" NOT NULL DEFAULT 'PENDING';
