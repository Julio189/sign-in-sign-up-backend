import { User } from '../../../entities/User'

export interface IDeleteUsersRepository {
  findById(id: string): Promise<User | null>
  delete(id: string): Promise<void>
}
