import { User } from '../../../../entities/User'

export interface IGetUsersRepository {
  getAll(): Promise<User[]>
}
