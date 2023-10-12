import { AppError } from '../../../../shared/errors/app-errors'
import { JwtService } from '../../../../shared/services/jwt-service'
import { PasswordCrypto } from '../../../../shared/services/password-crypto'
import { ISignInRepository } from '../../repositories/sign-in-repository'
import { SignInDto } from './sign-in-dto'

export class SignInService {
  private signInRepository: ISignInRepository

  constructor(signInRepository: ISignInRepository) {
    this.signInRepository = signInRepository
  }

  async execute({ email, password }: SignInDto) {
    const user = await this.signInRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Email or password is incorrect!', 401)
    }
    const passwordMatch = await PasswordCrypto.verifyPassword(
      password,
      user.password,
    )

    if (!passwordMatch) {
      throw new AppError('Email or password is incorrect!', 401)
    }
    if (!user.id) return 'Incorret Id'

    const acessToken = JwtService.sign({ uid: user.id })
    if (acessToken === 'JWT_SECRET_NOT_FOUND') {
      throw new AppError('Token generator error!', 500)
    }
    return { acessToken }
  }
}
