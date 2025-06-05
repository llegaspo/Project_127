-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fname" TEXT NOT NULL,
    "mname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_login_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Announcement" (
    "ann_ID" TEXT NOT NULL PRIMARY KEY,
    "user_ID" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdBy" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "Source" TEXT NOT NULL,
    CONSTRAINT "Announcement_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Facebook_Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ann_ID" TEXT NOT NULL,
    "user_ID" TEXT NOT NULL,
    "page_Name" TEXT NOT NULL,
    "FB_Post_Id" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "Facebook_Post_ann_ID_fkey" FOREIGN KEY ("ann_ID") REFERENCES "Announcement" ("ann_ID") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Facebook_Post_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Facebook_Post_page_Name_fkey" FOREIGN KEY ("page_Name") REFERENCES "FBPage" ("pageName") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "To_Dos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userID" TEXT NOT NULL,
    "fbID" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "due_Date" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "priority" TEXT NOT NULL,
    CONSTRAINT "To_Dos_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "To_Dos_fbID_fkey" FOREIGN KEY ("fbID") REFERENCES "Facebook_Post" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FBPage" (
    "pageName" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_id_idx" ON "User"("id");

-- CreateIndex
CREATE INDEX "User_createdAt_lname_idx" ON "User"("createdAt", "lname");

-- CreateIndex
CREATE INDEX "Announcement_createdBy_title_idx" ON "Announcement"("createdBy", "title");

-- CreateIndex
CREATE INDEX "Announcement_createdAt_idx" ON "Announcement"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Facebook_Post_ann_ID_key" ON "Facebook_Post"("ann_ID");

-- CreateIndex
CREATE UNIQUE INDEX "Facebook_Post_FB_Post_Id_key" ON "Facebook_Post"("FB_Post_Id");

-- CreateIndex
CREATE INDEX "Facebook_Post_id_page_Name_idx" ON "Facebook_Post"("id", "page_Name");

-- CreateIndex
CREATE INDEX "Facebook_Post_author_idx" ON "Facebook_Post"("author");

-- CreateIndex
CREATE INDEX "To_Dos_priority_idx" ON "To_Dos"("priority");

-- CreateIndex
CREATE INDEX "FBPage_pageName_idx" ON "FBPage"("pageName");
