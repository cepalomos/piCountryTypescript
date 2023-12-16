import 'dotenv/config'

export default {
  port: process.env.PORT ?? 3001,
  user: process.env.POSTGRES_USER ?? 'user',
  password: process.env.POSTGRES_PASSWORD ?? 'pass',
  database: process.env.POSTGRES_DB ?? 'prueba',
  portDatabase: (process.env.POSTGRES_PORT != null) ? parseInt(process.env.POSTGRES_PORT) : 5432,
  host: process.env.DATABASE_HOST ?? 'localhost'
}
