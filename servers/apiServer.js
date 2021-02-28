const express = require('express');
const cors = require('cors')
const app = express();
const request = require('request');

const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {

  let url = "http://222.110.147.50:3012/getmeal"
  //post 요청
  let jsonDataObj = {
    "code": 2,
    "ymd": "2020.09.23",
    "weekday": "월"
  }

  let options = {
    url: url,
    method: 'POST',
    body: jsonDataObj,
    json: true //json으로 보낼경우 true로 해주어야 header값이 json으로 설정됩니다.
  };

  console.log(options)

  request.post(options, (error, response, body) => {
    // response.json(body)
    console.log(response.body)
    res.send(response.body)


    if (error) {
      console.log(error)
    }
  });
  
});

console.log(`Server PORT is ${port}`);
app.listen(port);