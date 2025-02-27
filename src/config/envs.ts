import { config } from 'dotenv';
import * as joi from 'joi';
// import { resolve } from 'path';

// const envFile = `.env.${process.env.NODE_ENV || 'local'}`;
// config({ path: resolve(__dirname, '..', envFile) });
config();

interface envsI {
  node_env: string;
  npm_package_version: string;
  npm_package_name: string;
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
    PACKAGE_VERSION: joi
      .string()
      .default(process.env.npm_package_version || '1.0'),
    PACKAGE_NAME: joi
      .string()
      .default(process.env.npm_package_name || 'food-api'),
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
  npm_package_version: envsVarsValue.npm_package_version,
  npm_package_name: envsVarsValue.npm_package_name,
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
