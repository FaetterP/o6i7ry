import { NextApiRequest, NextApiResponse } from "next";
import { HttpError } from "./HttpError";

export function successResponse(
  req: NextApiRequest,
  res: NextApiResponse,
  data?: any
) {
  res.status(200).json({ status: "ok", data });
}

export function errorResponse(
  req: NextApiRequest,
  res: NextApiResponse,
  error: unknown
) {
  if (error instanceof HttpError) {
    res.status(error.httpCode).json({ status: "error", error: error.message });
  }
}

export function getPathPieces(
  queryPath: string | string[] | undefined
): string[] {
  let pathPieces: string[] = [];
  if (queryPath) {
    if (Array.isArray(queryPath)) {
      pathPieces = [...queryPath];
    } else {
      pathPieces = [queryPath];
    }
  }
  return pathPieces;
}
