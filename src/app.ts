import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'reflect-metadata';
import apiRoutes from './routes';
import { connect } from './config/typeorm';

// initializations
const app: Application = express();
app.set('port', process.env.PORT || 4000);
connect();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api', apiRoutes);

export default app;
