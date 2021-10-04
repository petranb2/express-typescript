import { Request, Response, NextFunction } from 'express'
import { WaitingUser } from '../models/persist/waitingUser.persist.model'
import { getManager } from 'typeorm'
import ValidationService from '@services/validation.service'
const emailSchema = {
    type: 'object',
    additionalProperties: false,
    required: ["email"],
    properties: {
        email: {
            description: 'Email property must be valid',
            format: 'email',
            type: 'string',
            maxLength: 100
        }
    }
}

const joinWaitingUser = async (req: Request, res: Response, _next: NextFunction) => {
    const { email } = req.body;
    const validationService = new ValidationService();
    let valid = validationService.validate(emailSchema, { email });
    if (!valid) {
        res.status(400).json({ msg: 'Bad request' })
        return;
    }
    const entityManager = getManager()
    const waitingUser = new WaitingUser()
    waitingUser.email = email;
    waitingUser.subscribeDate = new Date();

    try {
        await entityManager.save(waitingUser)
        res.json({ msg: 'Successfull join to waiting list' })
    } catch (err: any) {
        console.log(err.message)
        res.status(500).json({ msg: 'Something went wrong' })
    }

};

export default { joinWaitingUser }
