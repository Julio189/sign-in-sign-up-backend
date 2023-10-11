import { prismaClient } from '../../database/client'
import { User } from '../../entities/User'
import { IGetUsersRepository } from '../../modules/users/repositories/get-users-repository'

export class GetUsersSqlite implements IGetUsersRepository {
  async getAll(): Promise<User[]> {
    const getUsers = await prismaClient.user.findMany()
    return getUsers
  }
}
