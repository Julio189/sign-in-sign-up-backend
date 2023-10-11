import { Request, Response } from 'express'
import { SignInService } from './sign-in-service'

export class SignInController {
  private signInService: SignInService

  constructor(signInService: SignInService) {
    this.signInService = signInService
  }

  async handle(request: Request, response: Response) {
    const { email, password } = request.body

    try {
      await this.signInService.execute({ email, password })
      return response.status(200).send('Login sucess!')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return response.status(error.statusCode).json({ error })
    }
  }
}
