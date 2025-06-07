import { MESSAGE, TIME_WINDOW } from "@src/constants/rateLimiter";
import rateLimit from "express-rate-limit";

const maxRequestsEnv = process.env.MAX_RATE_LIMITER_REQUESTS || "7";

export const rateLimiter = rateLimit({
  windowMs: TIME_WINDOW,
  max: parseInt(maxRequestsEnv, 10),
  message: MESSAGE,
  standardHeaders: true,
  legacyHeaders: false,
});
