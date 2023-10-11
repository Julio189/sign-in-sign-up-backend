import { User } from '../../../../entities/User'

export interface ISignUpRepository {
  findByEmail(email: string): Promise<User | null>
  save(user: User): Promise<void>
}
