// lib/init-db.js
import { setupDatabase } from './sqlite'; // Correct relative path

let dbInitialized = false;

export async function initializeDb() {
  if (!dbInitialized) {
    console.log('Initializing database...');
    await setupDatabase();
    dbInitialized = true;
    console.log('Database initialized successfully.');
  }
}

// Call it immediately so it runs when this module is imported
initializeDb();