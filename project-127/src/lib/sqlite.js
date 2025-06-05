// lib/sqlite.js (Revised for cleaner setup)

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

let cachedDb = null;

async function getDb() {
  if (cachedDb) {
    return cachedDb;
  }

  const dbPath = path.resolve(process.cwd(), 'events.db');

  cachedDb = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });

  return cachedDb;
}

export async function setupDatabase() {
  const db = await getDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS events (
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
}

export async function getEvents() {
  const db = await getDb();
  return db.all('SELECT * FROM events');
}

export async function getEventById(id) {
  const db = await getDb();
  return db.get('SELECT * FROM events WHERE id = ?', id);
}

export async function addEvent(event) {
  const db = await getDb();
  const { id, imageSrc, date, org, orgLink, title, description, link } = event;
  await db.run(
    `INSERT INTO events (id, imageSrc, date, org, orgLink, title, description, link)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    id, imageSrc, date, org, orgLink, title, description, link
  );
}

export async function updateEvent(id, event) {
  const db = await getDb();
  const { imageSrc, date, org, orgLink, title, description, link } = event;
  await db.run(
    `UPDATE events SET imageSrc = ?, date = ?, org = ?, orgLink = ?, title = ?, description = ?, link = ?
     WHERE id = ?`,
    imageSrc, date, org, orgLink, title, description, link, id
  );
}

export async function deleteEvent(id) {
  const db = await getDb();
  await db.run('DELETE FROM events WHERE id = ?', id);
}