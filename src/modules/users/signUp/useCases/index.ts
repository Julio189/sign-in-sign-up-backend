import { SignUpSqlite } from '../../../../sqliteDb/users/sign-up-sqlite'
import { SignUpController } from './sign-up-controller'
import { SignUpService } from './sign-up-service'

const signUpSqlite = new SignUpSqlite()

const signUpService = new SignUpService(signUpSqlite)

const signUpController = new SignUpController(signUpService)

export { signUpController }
