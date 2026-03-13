const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const db = require("./database")

const app = express()
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(express.static("public"))

app.post("/checkin", (req, res) => {
  const { name } = req.body
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
  db.all("SELECT * FROM attendance", (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }

    res.json(rows)
  })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})