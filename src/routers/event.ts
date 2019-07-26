import * as express from 'express';
import * as mongoose from 'mongoose';
import { Request, Response } from 'express';

export const eventRouter = express.Router();


const rootHandler = (req: Request, res: Response) => {
  res.send({ message: 'Welcome to event API' });
};
eventRouter.get('/', rootHandler);

