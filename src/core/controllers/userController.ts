import userService from '../services/user.service';
import { Request, Response, NextFunction } from "express";


function sendUser(req: Request, res: Response, next: NextFunction) {
    res.json(userService.getUserInfo());
};

export default { sendUser };