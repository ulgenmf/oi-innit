/*
  Warnings:

  - You are about to drop the column `topic` on the `Conversation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Conversation" DROP COLUMN "topic",
ADD COLUMN     "title" TEXT NOT NULL DEFAULT 'New Topic';
