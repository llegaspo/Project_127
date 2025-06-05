// lib/sqlite.js - REVISED

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path'; // Import path module for robust path handling

let cachedDb = null; // Use a cached database instance for efficiency

async function getDb() {
  if (cachedDb) {
    return cachedDb;
  }

  // Define the path to your SQLite database file relative to the project root
  const dbPath = path.resolve(process.cwd(), 'events.db'); // Still calling it events.db

  cachedDb = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });

  return cachedDb;
}

export async function setupDatabase() {
  const db = await getDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS announcements (
      id TEXT PRIMARY KEY,
      imageSrc TEXT,
      date TEXT,
      org TEXT,
      orgLink TEXT,
      title TEXT,
      description TEXT,
      link TEXT
    );
  `);
  // No return db here, as getDb will handle the singleton instance
}

export async function getAnnouncements() {
  const db = await getDb();
  return db.all('SELECT * FROM announcements');
}

export async function addAnnouncement(announcement) {
  const db = await getDb();
  const { id, imageSrc, date, org, orgLink, title, description, link } = announcement;
  await db.run(
    `INSERT INTO announcements (id, imageSrc, date, org, orgLink, title, description, link)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    id, imageSrc, date, org, orgLink, title, description, link
  );
}

export async function updateAnnouncement(id, announcement) {
  const db = await getDb();
  const { imageSrc, date, org, orgLink, title, description, link } = announcement;
  await db.run(
    `UPDATE announcements SET imageSrc = ?, date = ?, org = ?, orgLink = ?, title = ?, description = ?, link = ?
     WHERE id = ?`,
    imageSrc, date, org, orgLink, title, description, link, id
  );
}

export async function deleteAnnouncement(id) {
  const db = await getDb();
  await db.run('DELETE FROM announcements WHERE id = ?', id);
}