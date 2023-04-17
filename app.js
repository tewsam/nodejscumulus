const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<center><h1>EC2 Auto Scaling demo TEW shelew v1.0.0</h1></center>');
})

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
})