import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

export {app}; // Iremos utilizar named exports, pois facilita na importação depois.