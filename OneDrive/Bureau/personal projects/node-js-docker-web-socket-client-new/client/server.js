const express = require('express');
const app = express();
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/HomePage.html");
  });
app.listen(4000, () => console.log('Server is up and running'));