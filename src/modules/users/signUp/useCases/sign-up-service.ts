import { User } from '../../../../entities/User'
import { AppError } from '../../../../shared/errors/app-errors'
import { PasswordCrypto } from '../../../../shared/services/password-crypto'
import { ISignUpRepository } from '../repositories/sign-up-repository'
import { ISignUpDto } from './sign-up-dto'

export class SignUpService {
  private signUpRepository: ISignUpRepository

  constructor(signUpRepository: ISignUpRepository) {
    this.signUpRepository = signUpRepository
  }

  async execute({ name, email, password }: ISignUpDto) {
    const userAlreadyExists = await this.signUpRepository.findByEmail(email)

    const passwordHash = await PasswordCrypto.hashPassword(password)

    if (userAlreadyExists) {
      throw new AppError('Email already exists!', 400)
    }

    const user = new User({ name, email, password: passwordHash })

    await this.signUpRepository.save(user)
  }
}
