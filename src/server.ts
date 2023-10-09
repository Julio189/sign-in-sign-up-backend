import { app } from './app'
import 'dotenv/config'

const url = process.env.PORT_URL

app.listen(url || 8000, () => {
  console.log(`Server running in port ${url}`)
})
