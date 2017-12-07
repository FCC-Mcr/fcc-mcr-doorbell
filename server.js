const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const moment = require('moment');

app.set('view engine', 'ejs');
app.use(bodyParser.json());


app.post('/doorbell', (request, response) => {
  const url = process.env.SLACK_URL;
  const sent = moment(request.body.timeStamp).format('MM/YY/DD - HH:mm');
  const message = request.body.message;
  const data = {
    text: `${message} - ${sent}`
  };
  axios.post(url, data);
});

app.get('/', (request, response) => response.render(''));

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`app listening on port: ${PORT}`);
});