import { Router } from 'express'
import { signUpController } from './modules/users/signUp/useCases'
import { getUsersController } from './modules/users/getAll/useCases'
import { deleteUserController } from './modules/users/delete/useCases'
import { signInController } from './modules/users/signIn/useCases'

const router = Router()

router.post('/signUp', (req, res) => {
  return signUpController.handle(req, res)
})

router.get('/users', (req, res) => {
  return getUsersController.handle(req, res)
})

router.delete('/users/:id', (req, res) => {
  return deleteUserController.handle(req, res)
})

router.post('/signIn', (req, res) => {
  return signInController.handle(req, res)
})

export { router }
