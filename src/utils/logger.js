import winston from "winston";
import loggerConfig from "../config/winston-logger";

const logger = winston.createLogger(loggerConfig);
export default logger;