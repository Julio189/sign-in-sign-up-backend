import 'express-async-errors'
import { Request, Response } from 'express'
import { AppError } from './app-errors'

const error = (err: Error, resquest: Request, response: Response) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    })
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error ${err.message}`,
  })
}

export { error }
