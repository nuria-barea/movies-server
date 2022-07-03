import { Request, Response } from 'express';
import { userDAO, User } from '../model/user';


const userController = async (req: Request, res: Response) => {

    try {
        const { email, password, ...user } = req.body as User;
        if (!email || !password) {
            res.status(400).send('email or password missing');
        } else {
            const result = await userDAO.saveUser({ email, password, ...user });

            result
                ? res.status(201).json({ userId: result.insertedId.toString() })
                : res.status(500).send("Failed to create a new user.");
        }
    } catch (error: any) {

        res.status(400).send(error.message);
    }
}

export default userController;