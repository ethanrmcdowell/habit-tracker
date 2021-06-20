const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

const path = require('path');
const publicPath = path.join(__dirname, '/client/public');
app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
