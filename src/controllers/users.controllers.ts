import jwt, { SignOptions } from 'jsonwebtoken';
import { Request, Response } from 'express';
import UsersService from '../services/users.services';

const secret = 'trybesmithSecret';

const options: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

export default class UsersController {
  constructor(private usersService = new UsersService()) { }

  public createUser = async (req: Request, res: Response) => {
    const user = req.body;

    const { id, username, classe, level } = await this.usersService.createUser(user);

    const token = jwt.sign({ id, username, classe, level }, secret, options);

    return res.status(201).json({ token });
  };
} 