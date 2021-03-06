const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "project-service" },
  transports: [
    new winston.transports.File({
      filename: "v1/src/logs/projects/error.log",
      level: "error",
      maxsize:10485760
    }),
    new winston.transports.File({
      filename: "v1/src/logs/projects/info.log",
      level: "info",
      maxsize:10485760
    }),
    new winston.transports.File({
      filename: "v1/src/logs/projects/combined.log",
      maxsize:10485760
    }),
  ],
});

module.exports = logger;

