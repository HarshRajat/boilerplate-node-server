import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT, 10),

  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  /**
   * The database config
   */
  dbhost: process.env.DB_HOST,
  dbname: process.env.DB_NAME,
  dbuser: process.env.DB_USER,
  dbpass: process.env.DB_PASS,

  /**
   * Infura endpoints
   */
  web3provider: process.env.WEB3_PROVIDER,
  web3socket: process.env.WEB3_SOCKET,

  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },
};
