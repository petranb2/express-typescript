import { Router } from 'express'
import userCase from '@cases/userCase'
const router = Router()

/* GET users listing. */
router.get('/', userCase.sendUser)

export default router
