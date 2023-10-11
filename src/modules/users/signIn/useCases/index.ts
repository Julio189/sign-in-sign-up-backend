import { SignInSqlite } from '../../../../sqliteDb/users/sign-in-sqlite'
import { SignInController } from './sign-in-controller'
import { SignInService } from './sign-in-service'

const signInSqlite = new SignInSqlite()

const signInService = new SignInService(signInSqlite)

const signInController = new SignInController(signInService)

export { signInController }
