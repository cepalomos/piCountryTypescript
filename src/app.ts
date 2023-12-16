import 'reflect-metadata'
import express from 'express'
import generalRoutes from './routes'
import config from './config'

const app = express()
app.set('port', config.port ?? 3001)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(generalRoutes)

export default app
