const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

console.log(port);

console.log(path.join(__dirname, 'web-build'));
app.use(express.static(path.join(__dirname, 'web-build')));

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + 'web-build/index.html'));
});
