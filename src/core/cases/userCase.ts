import { repositoryFactory } from '../../app/Factory/index'
import { Request, Response, NextFunction } from 'express'
import UserRepository from '@repositories/user.repo'

function sendUser(_req: Request, res: Response, _next: NextFunction) {
  console.log('BEFORE CALL A REPO')
  const userRepo = repositoryFactory.get('UserRepository') as UserRepository
  console.log('AFTER CALL A REPO')
  res.json(userRepo.getUserList())
};

export default { sendUser }
