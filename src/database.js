import { env } from './env'

import pkg from 'knex'
const { knex: setupKnex } = pkg

export const config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'js',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
