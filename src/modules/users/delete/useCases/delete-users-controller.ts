/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { DeleteUsersService } from './delete-users-service'

export class DeleteUsersController {
  private deleteUsersService: DeleteUsersService

  constructor(deleteUsersService: DeleteUsersService) {
    this.deleteUsersService = deleteUsersService
  }

  async handle(request: Request, response: Response) {
    const { id } = request.params
    try {
      await this.deleteUsersService.execute(id)
      return response.status(200).send('User deleted!')
    } catch (error: any) {
      return response.status(error.statusCode).json({ error })
    }
  }
}
