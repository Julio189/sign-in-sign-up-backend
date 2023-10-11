import { prismaClient } from '../../database/client'
import { User } from '../../entities/User'
import { IDeleteUsersRepository } from '../../modules/users/repositories/delete-users-repository'

export class DeleteUsersSqlite implements IDeleteUsersRepository {
  async findById(id: string): Promise<User | null> {
    const userExists = await prismaClient.user.findFirst({
      where: {
        id,
      },
    })
    return userExists
  }

  async delete(id: string): Promise<void> {
    await prismaClient.user.delete({
      where: {
        id,
      },
    })
  }
}
