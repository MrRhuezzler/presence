import winston from "winston";

export default {
    transports: [
        new winston.transports.Console({ level: 'warn' }),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    ]
}