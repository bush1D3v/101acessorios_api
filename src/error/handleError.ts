import { HttpStatusError } from "./HttpStatusError";
import { Response } from "express";

export function handleError(
  response: Response,
  error: Error | HttpStatusError | unknown,
  statusCode?: number
) {
  if (error instanceof HttpStatusError) {
    response.status(error.statusCode).json({ message: error.message });
  }
  else if (error instanceof Error) {
    response.status(statusCode || 400).json({ message: error.message });
  }
  else {
    response.status(500).json({ message: "Internal server error" });
  }
}
