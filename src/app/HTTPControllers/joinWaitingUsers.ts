import { Router } from 'express'
import joinWaitingUser from '@cases/joinWaitingUser'
const router = Router()

router.post('/', joinWaitingUser.joinWaitingUser)

export default router
