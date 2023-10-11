import { AppError } from '../../../../shared/errors/app-errors'
import { IDeleteUsersRepository } from '../../repositories/delete-users-repository'

export class DeleteUsersService {
  private deleteUsersRepository: IDeleteUsersRepository

  constructor(deleteUsersRepository: IDeleteUsersRepository) {
    this.deleteUsersRepository = deleteUsersRepository
  }

  async execute(id: string) {
    const userExists = await this.deleteUsersRepository.findById(id)

    if (!userExists) {
      throw new AppError('User not exists!', 400)
    }
    await this.deleteUsersRepository.delete(id)
  }
}
