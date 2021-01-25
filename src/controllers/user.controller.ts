import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import { IUser } from '../interfaces';

export const getAllUsers = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const users: Array<IUser> = await getRepository(User).find();

    return res.json({ users });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

export const getOneUser = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const id = req.params.id;
    const user: IUser | undefined = await getRepository(User).findOne(id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    return res.json({ user });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

export const createUser = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const user: IUser = req.body;
    const newUser: IUser = await getRepository(User).create(user);
    const results = await getRepository(User).save(newUser);

    return res.json({ newUser: results });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const id = req.params.id;
    const newData: IUser = req.body;
    const user: IUser | undefined = await getRepository(User).findOne(id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    getRepository(User).merge(user, newData);
    const userUpdated = await getRepository(User).save(user);

    return res.json({ userUpdated });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const id = req.params.id;
    const user: IUser | undefined = await getRepository(User).findOne(id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    const results = await getRepository(User).delete(id);

    return res.json({ results });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};
