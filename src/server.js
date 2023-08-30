import fastify from 'fastify'
import { knex } from './database.js'

const app = fastify()

app.get('/hello', async () => {
  const transaction = await knex('transactions')
    .where('amount', 100)
    .select('*')

  return transaction
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is running on port 3333')
  })
