const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./database.db")

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS attendance (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      checkin TEXT,
      checkout TEXT
    )
  `)
})

module.exports = db