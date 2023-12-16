import { DataSource } from 'typeorm'
import config from './config'

const AppDataSource = new DataSource({
  type: 'postgres',
  host: config.host,
  port: config.portDatabase,
  username: config.user,
  password: config.password,
  database: config.database,
  synchronize: true,
  logging: true,
  entities: ['src/entity/*.ts'],
  subscribers: [],
  migrations: []
})

export default AppDataSource
