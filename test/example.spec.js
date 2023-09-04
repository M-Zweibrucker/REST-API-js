import { test, beforeAll, afterAll } from 'vitest'
import { app } from '../src/app.js'
import request from 'supertest'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('O ususario consegue criar uma nova transação', async () => {
  await request(app.server)
    .post('/transactions')
    .send({
      title: 'New transaction',
      amount: 4000,
      type: 'credit',
    })
    .expect(201)
})
