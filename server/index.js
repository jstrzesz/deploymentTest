const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('server test');
});

app.listen(3001, () => {
  console.log('app listening on port 3000');
});
