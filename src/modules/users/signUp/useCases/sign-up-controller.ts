import { Request, Response } from 'express'
import { SignUpService } from './sign-up-service'

export class SignUpController {
  private signUpService: SignUpService

  constructor(signUpService: SignUpService) {
    this.signUpService = signUpService
  }

  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body

    try {
      await this.signUpService.execute({
        name,
        email,
        password,
      })
      return response.status(201).json('User Created!')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return response.status(error.statusCode).json({ error })
    }
  }
}
