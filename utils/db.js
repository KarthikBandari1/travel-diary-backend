const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database.sqlite');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS DiaryEntry (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT,
    date TEXT,
    location TEXT,
    photos TEXT,
    userId INTEGER,
    FOREIGN KEY (userId) REFERENCES User(id)
  )`);
});

module.exports = db;
