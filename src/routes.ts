import { Router } from 'express'
import { signUpController } from './modules/users/signUp/useCases'

const router = Router()

router.post('/signUp', (req, res) => {
  return signUpController.handle(req, res)
})

export { router }
