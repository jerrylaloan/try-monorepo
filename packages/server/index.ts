import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

const PORT = 8080;

const app = express();


app.use(cors());

app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/v1/hello', (req: Request, res: Response) => {
  return res.json({ message: 'hello world!' });
});

app.listen(PORT, () => {
  console.log(`
    ################################################
    #           Server listening on port: ${PORT}     # 
    ################################################
  `);
});

