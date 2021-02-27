const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
/*
* You can change the text to make a cool easter egg
* Remember to use UptimerRobot on the url
*/
  res.send('easter egg :)');
});
 
app.listen(3000);
