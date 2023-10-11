import { DeleteUsersSqlite } from '../../../../sqliteDb/users/delete-users-sqlite'
import { DeleteUsersController } from './delete-users-controller'
import { DeleteUsersService } from './delete-users-service'

const deleteUserSqlite = new DeleteUsersSqlite()

const deleteUserService = new DeleteUsersService(deleteUserSqlite)

const deleteUserController = new DeleteUsersController(deleteUserService)

export { deleteUserController }
