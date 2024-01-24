const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Node.js backend!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
