import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { saveUnityTutorial } from "services/firebase";
import { CommonApiResponse } from "types/api";
import { HttpError } from "utils.ts/HttpError";
import { errorResponse, successResponse } from "utils.ts/responses";

type BodyType = {
  page: string;
  data: {
    content: string;
    moreContent: string;
    links: { name: string; link: string }[];
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CommonApiResponse>
) {
  try {
    if (!req.method || req.method! !== "PATCH") {
      res.status(405);
      return;
    }

    const { page, data } = req.body as BodyType;

    const session = await getSession({ req });

    if (!session) {
      throw new HttpError(401, "Unauthorized");
    }

    await saveUnityTutorial(page, data);

    successResponse(req, res);
  } catch (err) {
    errorResponse(req, res, err);
  }
}