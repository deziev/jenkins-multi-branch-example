import * as Express from 'express';
import * as http from 'http';

const app = Express();

app.get('/', (req, res) => {
  res.send('Hello from jenkins');
});

export const server = http.createServer(app);
