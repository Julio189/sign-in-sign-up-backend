import { prismaClient } from '../../database/client'
import { User } from '../../entities/User'
import { ISignInRepository } from '../../modules/users/repositories/sign-in-repository'

export class SignInSqlite implements ISignInRepository {
  async findByEmail(email: string): Promise<User | null> {
    const userExists = await prismaClient.user.findUnique({
      where: {
        email,
      },
    })
    return userExists
  }
}
