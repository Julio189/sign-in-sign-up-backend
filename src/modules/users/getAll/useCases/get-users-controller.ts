import { Request, Response } from 'express'
import { GetUsersService } from './get-users-service'

export class GetUsersController {
  private getUsersService: GetUsersService

  constructor(getUsersService: GetUsersService) {
    this.getUsersService = getUsersService
  }

  async handle(request: Request, response: Response) {
    try {
      const users = await this.getUsersService.execute()
      return response.status(200).json({
        data: {
          users,
        },
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return response.status(error.statusCode).json({ error })
    }
  }
}
