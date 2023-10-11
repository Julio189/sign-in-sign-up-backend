import { AppError } from '../../../../shared/errors/app-errors'
import { PasswordCrypto } from '../../../../shared/services/password-crypto'
import { ISignInRepository } from '../../repositories/sign-in-repository'
import { SignInDto } from './sign-in-dto'

export class SignInService {
  private signInRepository: ISignInRepository

  constructor(signInRepository: ISignInRepository) {
    this.signInRepository = signInRepository
  }

  async execute({ email, password }: SignInDto) {
    const userExists = await this.signInRepository.findByEmail(email)

    if (!userExists) {
      throw new AppError('Email or password is incorrect!', 401)
    }
    const passwordMatch = await PasswordCrypto.verifyPassword(
      password,
      userExists.password,
    )

    if (!passwordMatch) {
      throw new AppError('Email or password is incorrect!', 401)
    }
  }
}
