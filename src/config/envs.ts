import * as joi from 'joi';
import { config } from 'dotenv';
import { resolve } from 'path';

const envFile = `.env.${process.env.NODE_ENV || 'local'}`;
config({ path: resolve(__dirname, '..', envFile) });

interface envsI {
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
console.log('🚀 ~ envsVarsValue:', envsVarsValue);

export const envs: envsI = {
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
