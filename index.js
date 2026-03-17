const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/api/hello', (req, res) => {
  res.json({ msg: 'Hello from backend!' });
});

app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));