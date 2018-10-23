const crypto = require('crypto'); 
const express = require('express');
const parser = require('body-parser');
const app = express();
const port = 3000;

app.use(parser.urlencoded());

const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


let count = 0

app.post('/', (req, res) => {
  try {
    count++;
    const result = validateEmail(req.body.q);
    res.send(result);
    console.log(`${count}: ${result}`);
  } catch (e) {
    res.status(500).send(`Server error: ${e}`);
    console.error(e);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}.`));
