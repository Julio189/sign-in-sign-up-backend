import { User } from '../../../entities/User'

export interface ISignInRepository {
  findByEmail(email: string): Promise<User | null>
}
