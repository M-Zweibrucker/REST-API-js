import 'dotenv/config'
import Joi from 'joi'

const envSchema = Joi.object({
  NODE_ENV: Joi.valid('development', 'production', 'test')
    .default('production')
    .required(),
  DATABASE_URL: Joi.string().required(),
})

export const env = envSchema.parse(process.env)
