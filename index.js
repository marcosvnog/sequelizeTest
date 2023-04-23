import express from 'express';
import { createServer } from 'node:http';
import userRoute from './routes/users.js';

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(userRoute);

const server = createServer(app);

const PORT = process.env.PORT || 3000; 

server.on('listening', () => console.log('Server running on 3000'));
server.on('error', () => console.log('Internal Server Error'));

server.listen(PORT);