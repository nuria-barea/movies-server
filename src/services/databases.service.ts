import { config } from './config';
import { MongoClient } from 'mongodb';

const url = config();

const client = new MongoClient(url);
const dbName = 'movies';


export const connection = async () =>{
    try{
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('movies');
        return collection;
    } catch (error){
        console.log(error);
    } 
}
