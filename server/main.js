import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

let data = {};
let counter = 0;
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  counter = counter + 1;
  res.send(counter.toString());
});

app.get('/healthz', (req, res) => {
  res.send({
    uptime: process.uptime(),
    message: 'OK',
    timestamp: new Date().toISOString(),
  });
});

app.get('/arduino', (req, res) => {
  res.send({
    message: 'OK',
  });
});

app.post('/gayboyz/signal', (req, res) => {
  console.log(req.body);
  data = {
    ...data,
    ...req.body
  };
  res.send({
    message: 'OK',
  });
});

app.get('/gayboyz/signal', (req, res) => {
  res.send({
    data,
  })
})

console.log(counter);

app.listen(port, () => {
  console.log(`Starting up server on port ${port}`);
});

// curl -X POST localhost:3000/gayboyz/signal --data '{"danny":true}' --header 'Content-Type: application/json'
// curl -X GET localhost:3000/gayboyz/signal 