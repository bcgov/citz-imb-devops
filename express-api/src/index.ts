import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/v1', (req: Request, res: Response) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

