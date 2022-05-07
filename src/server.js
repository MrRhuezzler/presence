import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import logger from "./utils/logger";

const app = express();

app.use(helmet());

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// logger
app.use(morgan('combined'));

// routes

// default route

// error handler
app.use((err, req, res, next) => {
    logger.error(err.message, err);
});

export default app;