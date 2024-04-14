const db = require('../utils/db');
const bcrypt = require('bcrypt');

class User {
  static async register(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return new Promise((resolve, reject) => {
      db.run('INSERT INTO User (username, password) VALUES (?, ?)', [username, hashedPassword], function(err) {
        if (err) {
          reject(err);
          return;
        }
        resolve({ id: this.lastID, username });
      });
    });
  }

  static async login(username, password) {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM User WHERE username = ?', [username], async (err, row) => {
        if (err) {
          reject(err);
          return;
        }
        if (!row) {
          reject('User not found');
          return;
        }
        const isValidPassword = await bcrypt.compare(password, row.password);
        if (!isValidPassword) {
          reject('Invalid password');
          return;
        }
        resolve({ id: row.id, username: row.username });
      });
    });
  }

  static async findByUsername(username) {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM User WHERE username = ?', [username], (err, row) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(row);
      });
    });
  }
}

module.exports = User;
