/*
  Warnings:

  - You are about to drop the column `image_URL` on the `Product` table. All the data in the column will be lost.
  - Added the required column `image_url` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "image_URL",
ADD COLUMN     "image_url" TEXT NOT NULL;
