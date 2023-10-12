import * as jwt from 'jsonwebtoken'
import 'dotenv/config'

interface JwtData {
  uid: number
}

const jwtSecret = process.env.JWT_SECRET

const sign = (data: JwtData) => {
  if (!jwtSecret) return 'JWT_SECRET_NOT_FOUND'

  return jwt.sign(data, jwtSecret, { expiresIn: '12h' })
}

const verify = (
  token: string,
): JwtData | 'JWT_SECRET_NOT_FOUND' | 'INVALID_TOKEN' => {
  if (!jwtSecret) return 'JWT_SECRET_NOT_FOUND'

  try {
    const decoded = jwt.verify(token, jwtSecret)

    if (typeof decoded === 'string') {
      return 'INVALID_TOKEN'
    }

    return decoded as JwtData
  } catch (error) {
    return 'INVALID_TOKEN'
  }
}

export const JwtService = {
  sign,
  verify,
}
