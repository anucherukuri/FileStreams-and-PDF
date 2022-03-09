import express from "express";

import cors from "cors";

import listEndpoints from "express-list-endpoints";

import authorsRouter from "./authors/index.js";

import blogsRouter from "./blogs/index.js";

import { errorHandler } from "./errorHandlers.js";

import path, { dirname } from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const publicDirectory = path.join(__dirname, "../public");

const server = express();

const { PORT } = process.env;

const whiteList = ["http://localhost:3000"];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.some((allowedUrl) => allowedUrl === origin)) {
      callback(null, true);
    } else {
      const error = new Error("Not allowed by cors!");
      error.status = 403;
      callback(error);
    }
  },
};

server.use(cors(corsOptions));

server.use(express.json());

server.use(express.static(publicDirectory));

server.use("/authors", authorsRouter);

server.use("/blogs", blogsRouter);

server.use(errorHandler);

console.log(listEndpoints(server));

server.listen(PORT, () => console.log("✅ Server is running on port : ", PORT));

server.on("error", (error) =>
  console.log(`❌ Server is not running due to : ${error}`)
);
