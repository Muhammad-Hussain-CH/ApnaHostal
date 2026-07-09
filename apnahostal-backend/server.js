require('dotenv').config();
const authRoutes = require('./routes/auth.routes');
const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.use(express.json());        // ← moved above the routes
app.use('/api/auth', authRoutes);

// simple health check + DB connection test 
app.get('/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'ok', db: 'connected' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', db: 'not connected' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});