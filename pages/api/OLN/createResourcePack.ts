import { readdir } from "fs/promises";
import { NextApiRequest, NextApiResponse } from "next";
import { CommonApiResponse } from "types/api";
import { HttpError } from "utils/HttpError";
import { errorResponse } from "utils/httpUtils";
import archiver from "archiver";
import clone from "git-clone/promise";
import { existsSync } from "fs";

type BodyType = {
  mods: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CommonApiResponse>
) {
  const body = req.body as BodyType;
  try {
    if (!req.method || req.method! !== "POST") {
      throw new HttpError(405, "Only POST enabled");
    }

    if (!body.mods || !Array.isArray(body.mods) || body.mods.length === 0) {
      throw new HttpError(400, "Empty mods array");
    }

    if (!existsSync("OLN/")) {
      await clone("https://github.com/FaetterP/OLN.git", "OLN");
    }

    const dirents = await readdir("OLN/assets", { withFileTypes: true })
    const folders = dirents.filter(d => d.isDirectory()).map(d => d.name)
    const mods = body.mods.filter(value => folders.includes(value));

    const archive = archiver('zip');

    archive.on('error', function (err) {
      throw err;
    });

    res.setHeader('Content-Disposition', 'attachment; filename=OLN.zip');
    archive.pipe(res);

    archive.file('OLN/pack.png', { name: 'pack.png' });
    archive.file('OLN/pack.mcmeta', { name: 'pack.mcmeta' });
    for (const mod of mods) {
      archive.directory(`OLN/assets/${mod}`, `assets/${mod}`);
    }

    await archive.finalize();
  } catch (err) {
    errorResponse(req, res, err);
  }
}
