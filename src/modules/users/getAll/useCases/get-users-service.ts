import { AppError } from '../../../../shared/errors/app-errors'
import { IGetUsersRepository } from '../../repositories/get-users-repository'

export class GetUsersService {
  private getUsersRepository: IGetUsersRepository

  constructor(getUsersRepository: IGetUsersRepository) {
    this.getUsersRepository = getUsersRepository
  }

  async execute() {
    const getUsers = await this.getUsersRepository.getAll()

    if (!getUsers) {
      throw new AppError('There is no users', 400)
    }
    return getUsers
  }
}
