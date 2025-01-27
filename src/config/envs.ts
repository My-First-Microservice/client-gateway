import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  ORDERS_MS_PORT: number;
  ORDERS_MS_HOST: string;

  NATS_SERVERS: string[];
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    ORDERS_MS_PORT: joi.number().required(),
    ORDERS_MS_HOST: joi.string().required(),

    NATS_SERVERS: joi.array().items(joi.string()).required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS?.split(','),
});

if (error) {
  throw new Error(`Config validation error: ${error}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  services: {
    orders: {
      port: envVars.ORDERS_MS_PORT,
      host: envVars.ORDERS_MS_HOST,
    },
    nats: envVars.NATS_SERVERS,
  },
};
