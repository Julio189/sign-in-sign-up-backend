import { GetUsersSqlite } from '../../../../sqliteDb/users/get-all-sqlite'
import { GetUsersController } from './get-users-controller'
import { GetUsersService } from './get-users-service'

const getUsersSqlite = new GetUsersSqlite()

const getUsersService = new GetUsersService(getUsersSqlite)

const getUsersController = new GetUsersController(getUsersService)

export { getUsersController }
