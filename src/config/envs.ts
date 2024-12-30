import * as joi from 'joi';
import { config } from 'dotenv';
import { resolve } from 'path';

const envFile = `.env.${process.env.NODE_ENV || 'local'}`;
config({ path: resolve(__dirname, '..', envFile) });

interface envsI {
  node_env: string;
  port: number;
  jwt_secret: string;
  db: {
    port: number;
    host: string;
    username: string;
    password: string;
    database: string;
  };
}

const envsSchema = joi
  .object({
    NODE_ENV: joi.string().optional().default('local'),
    PORT: joi.number().required(),
    JWT_SECRET: joi.string().required(),
    DB_PORT: joi.number().required(),
    DB_HOST: joi.string().required(),
    DB_USERNAME: joi.string().required(),
    DB_PASSWORD: joi.string().required(),
    DB_DATABASE: joi.string().required(),
  })
  .unknown();

const { error, value: envsVarsValue } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const envs: envsI = {
  node_env: envsVarsValue.NODE_ENV,
  port: envsVarsValue.PORT,
  jwt_secret: envsVarsValue.JWT_SECRET,
  db: {
    port: envsVarsValue.DB_PORT,
    host: envsVarsValue.DB_HOST,
    username: envsVarsValue.DB_USERNAME,
    password: envsVarsValue.DB_PASSWORD,
    database: envsVarsValue.DB_DATABASE,
  },
};
