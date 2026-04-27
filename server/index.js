require('dotenv').config()
const express   = require('express')
const mongoose  = require('mongoose')
const cors      = require('cors')
const bookRoutes = require('./routes/books')

const app  = express()
const PORT = process.env.PORT || 5000

// ── Middleware ────────────────────────────────────────────────────
                          // parse JSON request bodies
const cors = require('cors');
app.use(cors({ origin: process.env.CLIENT_URL || '*' }));

// ── Routes ───────────────────────────────────────────────────────
app.use('/api/books', bookRoutes)

// ── Health check ─────────────────────────────────────────────────
app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

// ── Connect to MongoDB then start server ──────────────────────────
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch(err => {
    console.error("MongoDB connection error:", err.message)
    process.exit(1)
  })
