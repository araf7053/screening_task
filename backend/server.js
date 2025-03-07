const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();


app.get('/api/greet', (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: 'Name is required.' });
  }

  res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});


app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port:${process.env.PORT}`);
});