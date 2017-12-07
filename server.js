const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const moment = require('moment');

app.set('view engine', 'ejs');
app.use(bodyParser.json());


app.post('/doorbell', (request, response) => {
  const url = 'https://hooks.slack.com/services/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';
  const sent = moment(request.body.timeStamp).format('MM/YY/DD - HH:mm');
  const message = request.body.message;
  const data = {
    text: `${message} - ${sent}`
  };
  axios.post(url, data);
});

app.get('/', (request, response) => response.render(''));

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`app listening on port: ${PORT}`);
});