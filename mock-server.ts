import { createMiddleware } from "@mswjs/http-middleware";
import express from "express";
import cors from "cors";
import logger from "pino-http";

import { handlers } from "./src/shared/api/";

const app = express();

app.use(cors({ origin: "*", credentials: true }));

app.use(express.json());
app.use(logger());
app.use(createMiddleware(...handlers));

// initializeDb().then(() => {
//   console.log('db initialized');
//   app.listen(process.env.VITE_APP_MOCK_API_PORT, () => {
//     console.log(`Mock server is running on port ${process.env.VITE_APP_MOCK_API_PORT}`);
//   })
// })