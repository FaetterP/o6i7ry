import { NextApiRequest, NextApiResponse } from "next";
import { getOLNTextures } from "services/firebase";
import { CommonApiResponse } from "types/api";
import { errorResponse, getPathPieces, successResponse } from "utils/httpUtils";

type QueryType = {
  branch: string;
  path?: string | string[];
  "path[]"?: string | string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CommonApiResponse>
) {
  try {
    if (!req.method || req.method! !== "GET") {
      res.status(405);
      return;
    }

    const query = req.query as QueryType;

    const pathPieces = getPathPieces(query["path[]"] || query.path);
    const path: string =
      pathPieces.length === 0 ? "" : pathPieces.reduce((a, b) => `${a}/${b}`);

    const ret = await getOLNTextures(query.branch, path);

    successResponse(req, res, ret);
  } catch (err) {
    errorResponse(req, res, err);
  }
}
