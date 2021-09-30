import { repositoryFactory } from '../../app/Factory/index'
import { Request, Response, NextFunction } from 'express'
import UserRepository from '@repositories/user.repo';


function sendUser(_req: Request, res: Response, _next: NextFunction) {
  let userRepo = repositoryFactory.get('UserRepository') as UserRepository;
  res.json(userRepo.getUserList())
};

export default { sendUser }
