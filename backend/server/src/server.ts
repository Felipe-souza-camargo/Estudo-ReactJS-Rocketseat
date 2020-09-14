import express from 'express'
import routes from './routes';
import cors from 'cors'
const app = express();
app.use(cors())
app.use(express.json());
app.listen(3333); //porta na qual a api se conecta 
app.use(routes)