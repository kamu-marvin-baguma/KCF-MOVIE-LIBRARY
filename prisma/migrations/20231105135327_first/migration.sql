/*
  Warnings:

  - You are about to drop the column `admin_id` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `subscriber_id` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subscriber` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AdminToMovie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_subscriber_id_fkey";

-- DropForeignKey
ALTER TABLE "Subscriber" DROP CONSTRAINT "Subscriber_movie_id_fkey";

-- DropForeignKey
ALTER TABLE "_AdminToMovie" DROP CONSTRAINT "_AdminToMovie_A_fkey";

-- DropForeignKey
ALTER TABLE "_AdminToMovie" DROP CONSTRAINT "_AdminToMovie_B_fkey";

-- DropIndex
DROP INDEX "Profile_admin_id_key";

-- DropIndex
DROP INDEX "Profile_subscriber_id_key";

-- AlterTable
ALTER TABLE "Movie" ALTER COLUMN "genre_id" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "admin_id",
DROP COLUMN "subscriber_id";

-- DropTable
DROP TABLE "Admin";

-- DropTable
DROP TABLE "Subscriber";

-- DropTable
DROP TABLE "_AdminToMovie";
