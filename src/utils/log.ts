import * as winston from 'winston';

const baseLogger: winston.Logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.timestamp()
  ),
  transports: [new winston.transports.Console()],
});

export const createLogger = (moduleName: string): winston.Logger =>
  baseLogger.child({ moduleName });
