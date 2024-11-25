import { isLocal } from "./utils";

export const logger = {
  log: (...args: any[]) => {
    if (isLocal) {
      console.log(...args);
    }
  },
  warn: (...args: any[]) => {
    if (isLocal) {
      console.warn(...args);
    }
  },
  error: (...args: any[]) => {
    if (isLocal) {
      console.error(...args);
    }
  },
}