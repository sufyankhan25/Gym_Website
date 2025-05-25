import Express from 'express';
import {config} from 'dotenv';
import cors from 'cors';
import router from './router/route.js';

const app = Express();



app.use(Express.json())
app.use(Express.urlencoded({extended:true}));
config({path: './config.env'});
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:['POST'],
    credentials:true,
}));

app.use('/api/v',router)

app.listen(process.env.PORT,()=>{
console.log(`Server is running on port ${process.env.PORT}`);
})