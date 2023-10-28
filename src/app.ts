import express from 'express'
import cors from 'cors'
import { error } from './shared/errors/error'
import { router } from './routes'

const app = express()

app.use(cors())

app.use(express.json())

app.use(router)

app.use(error)

export { app }
