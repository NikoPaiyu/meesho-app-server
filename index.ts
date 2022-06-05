import express,{Express} from 'express';
import dotenv from 'dotenv';
import { getRoutes } from './src/routes';
import { MongoDBConnection } from './src/config/db.config';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

// Creating a new instance
const connection = new MongoDBConnection();
connection.connect();

// To Use Global Routing System
app.use('/api',getRoutes());

// Listening to Port
app.listen(port,() => {
    console.log('Server is running');
});







