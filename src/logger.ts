import winston from 'winston';

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'warn',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.printf(({ level, message, timestamp }) => {
      return `${timestamp} ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
      silent: process.env.SILENT === 'true' || process.env.SILENT === '1',
    }),
  ],
});

export const enableConsoleLogging = (): void => {
  // Console logging is now enabled by default, this is kept for backwards compatibility
};

export default logger;
