import { prismaClient } from '../../database/client'
import { User } from '../../entities/User'
import { ISignUpRepository } from '../../modules/users/repositories/sign-up-repository'

export class SignUpSqlite implements ISignUpRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prismaClient.user.findUnique({
      where: {
        email,
      },
    })
    return user
  }

  async save(user: User): Promise<void> {
    await prismaClient.user.create({
      data: user,
    })
  }
}
