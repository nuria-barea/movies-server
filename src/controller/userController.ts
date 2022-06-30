import {Request,Response} from 'express';
import iUser from '../model/interfaces/iUser';
import userModel from '../model/userModel';

const userController = (req:Request,res:Response)=>{

    const user:iUser = req.body;
    const result = userModel.saveUser(user);

    res.json(result);

}

export default userController;