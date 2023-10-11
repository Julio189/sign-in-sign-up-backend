import { Router } from 'express'
import { signUpController } from './modules/users/signUp/useCases'
import { getUsersController } from './modules/users/getAll/useCases'

const router = Router()

router.post('/signUp', (req, res) => {
  return signUpController.handle(req, res)
})

router.get('/users', (req, res) => {
  return getUsersController.handle(req, res)
})

export { router }
