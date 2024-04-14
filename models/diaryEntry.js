const db = require('../utils/db');

class DiaryEntry {
  static async create(title, description, date, location, photos, userId) {
    return new Promise((resolve, reject) => {
      db.run('INSERT INTO DiaryEntry (title, description, date, location, photos, userId) VALUES (?, ?, ?, ?, ?, ?)', [title, description, date, location, photos, userId], function(err) {
        if (err) {
          reject(err);
          return;
        }
        resolve({ id: this.lastID, title, description, date, location, photos });
      });
    });
  }

  static async findAll(userId) {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM DiaryEntry WHERE userId = ?', [userId], (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(rows);
      });
    });
  }

  static async findById(entryId, userId) {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM DiaryEntry WHERE id = ? AND userId = ?', [entryId, userId], (err, row) => {
        if (err) {
          reject(err);
          return;
        }
        if (!row) {
          reject('Diary entry not found');
          return;
        }
        resolve(row);
      });
    });
  }

  static async update(entryId, { title, description, date, location, photos }, userId) {
    return new Promise((resolve, reject) => {
      db.run('UPDATE DiaryEntry SET title = ?, description = ?, date = ?, location = ?, photos = ? WHERE id = ? AND userId = ?', [title, description, date, location, photos, entryId, userId], function(err) {
        if (err) {
          reject(err);
          return;
        }
        resolve({ id: entryId, title, description, date, location, photos });
      });
    });
  }

  static async delete(entryId, userId) {
    return new Promise((resolve, reject) => {
      db.run('DELETE FROM DiaryEntry WHERE id = ? AND userId = ?', [entryId, userId], function(err) {
        if (err) {
          reject(err);
          return;
        }
        resolve('Diary entry deleted successfully');
      });
    });
  }
}

module.exports = DiaryEntry;
