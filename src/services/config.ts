import {config as dotenvConfig} from 'dotenv';

dotenvConfig();
export const config=()=>{
    const uri:string = process.env.MONGODB_URL;
    return uri;
}
