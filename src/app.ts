import express, {Request,Response} from 'express';

const app = express();



app.get('/',(req:Request,res:Response)=>{
    res.json('hello world');
})

export default app;
