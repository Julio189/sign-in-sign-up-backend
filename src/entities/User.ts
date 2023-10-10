import { uuid } from 'uuidv4'

export class User {
  public readonly id?: string | undefined
  public name: string
  public email: string
  public password: string

  constructor({ name, email, password, id }: User) {
    this.name = name
    this.email = email
    this.password = password

    if (!id) {
      this.id = uuid()
    }
  }
}
