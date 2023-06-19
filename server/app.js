// ES6 & ES5 like require dosenot work so I ES& is used instead;
import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!\n Fuck You too');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});