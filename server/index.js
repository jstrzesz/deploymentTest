const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/', (req, res) => {
  res.send('server test');
});

app.listen(3001, () => {
  console.log('app listening on port 3001');
});
