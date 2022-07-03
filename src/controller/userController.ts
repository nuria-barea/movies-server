import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { userDAO, User } from '../model/user';


const userController = async (req: Request, res: Response) => {

    try {
        const { email, password,name, ...user } = req.body as User;
        if (!email || !password || !name) {
            res.status(400).send('missing some data');
        } else {
            const result:QueryResult = await userDAO.saveUser({ email, password,name, ...user });

            result
                ? res.status(201).json({result: result.rows})
                : res.status(500).send("Failed to create a new user.");
        }
    } catch (error: any) {

        res.status(400).send(error.message);
    }
}

export default userController;