const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const sqlite3 = require("sqlite3").verbose()
const path = require("path")

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "public")))

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

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.post("/checkin", (req, res) => {

  const { name } = req.body

  if (!name) {
    return res.status(400).json({ error: "Name required" })
  }

  const time = new Date().toLocaleString()

  db.run(
    "INSERT INTO attendance (name, checkin) VALUES (?, ?)",
    [name, time],
    function (err) {

      if (err) {
        return res.status(500).json({ error: err.message })
      }

      res.json({ message: "Check-in berhasil" })

    }
  )

})

app.get("/attendance", (req, res) => {

  db.all("SELECT * FROM attendance ORDER BY id DESC", (err, rows) => {

    if (err) {
      return res.status(500).json({ error: err.message })
    }

    res.json(rows)

  })

})

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT)
})