import * as Express from 'express';
import * as http from 'http';

const app = Express();

app.get('/', (req, res) => {
  res.send('Hello from jenkins');
});

const server = http.createServer(app);
const port = 3000;


server.listen(port, () => {
  console.log(`Server started at port: ${server.address().port}`);
});
