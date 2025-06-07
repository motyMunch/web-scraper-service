import { MILLISECONDS_IN_SECOND, SECONDS_IN_MINUTE } from "@src/constants/date";

export const MAX_ATTEMPTS = 3;
export const MESSAGE = "Too many requests, please try again later.";
export const TIME_WINDOW = 15 * SECONDS_IN_MINUTE * MILLISECONDS_IN_SECOND;
