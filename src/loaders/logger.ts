import winston from 'winston';
import config from '../config';

const transports = [];
if(process.env.NODE_ENV !== 'dev') {
  transports.push(
    new winston.transports.Console()
  )
} else {
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.splat(),
      )
    })
  )
}

const LoggerInstance = winston.createLogger({
  level: config.logs.level,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.colorize(),
    winston.format.json(),
  ),
  transports: [
    new (winston.transports.Console)({
      format: winston.format.combine(
        winston.format.colorize({
          all: true
        }),
        winston.format.timestamp({
          format:"YY-MM-DD HH:MM:SS"
        }),
        winston.format.printf(
          info => ` [${info.timestamp}] [${info.level}]: ${info.message}`
        )
      )
    })
  ],
});

export default LoggerInstance;
