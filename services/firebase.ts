import { FirebaseApp, initializeApp } from "firebase/app";
import { getDatabase, ref, get, child, set } from "firebase/database";
import config from "config";
import { HttpError } from "utils/HttpError";
import { Project } from "types/general";

type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

type ContentItemInfo = { name: string; isFolder: boolean };
let app: FirebaseApp | undefined = undefined;

function connectToFirebase() {
  if (app) return;

  const firebaseConfig = config.get<FirebaseConfig>("firebase.config");
  app = initializeApp(firebaseConfig);
}

async function getValue<T>(path: string) {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, path));

  if (!snapshot.exists()) {
    return undefined
  }

  return snapshot.val() as T;
}

export async function setValue(path: string, data: any) {
  connectToFirebase();
  const dbRef = ref(getDatabase(), path);
  await set(dbRef, data);
}

export async function getFolderContent(
  resourcepack: string,
  path: string
): Promise<ContentItemInfo[]> {
  connectToFirebase();
  const pathPieces = path.replaceAll(".", ",").split("/").filter(Boolean);
  const folderName = pathPieces.pop();
  const isFolder = await getValue<boolean>(
    `${resourcepack}-assets${pathPieces.reduce((prev, piece) => `${prev}/${piece}/content`, "")}/${folderName}/isFolder`
  );
  if (!isFolder) {
    throw new HttpError(400, "this is not folder");
  }

  const keys = await getValue<string[]>(
    `${resourcepack}-assets${pathPieces.reduce((prev, piece) => `${prev}/${piece}/content`, "")}/${folderName}/keys`
  );

  const promises = keys!.map(key => {
    return new Promise<ContentItemInfo>(async (res, rej) => {
      const isFolder = await getValue<boolean>(
        `${resourcepack}-assets${pathPieces.reduce((prev, piece) => `${prev}/${piece}/content`, "")}/${folderName}/content/${key}/isFolder`
      );
      res({
        name: key.replaceAll(",", "."),
        isFolder: isFolder!
      })
    })
  })

  const ret = await Promise.all(promises);
  return ret;
}

export async function getFileContent(
  resourcepack: string,
  path: string
) {
  const pathPieces = path.replaceAll(".", ",").split("/");
  const fileName = pathPieces.pop();
  const content = await getValue<string>(
    `${resourcepack}-assets${pathPieces.reduce((prev, piece) => `${prev}/${piece}/content`, "")}/${fileName}`
  );

  return content || "";
}

export async function getLang(resourcepack: string, path: string) {
  const pathPieces = path.split("/")
  path = pathPieces.reduce((a, b) => `${a}/${b}`)

  const en = getFileContent(resourcepack, `better/${path}/en_US.lang`);
  const ru = getFileContent(resourcepack, `original/${path}/ru_RU.lang`);

  return [en, ru];
}

export async function getProjects() {
  connectToFirebase();
  const projects = await getValue<Project[]>("/projects");
  return projects || [];
}

export async function getUnityTutorial(pageName: string) {
  connectToFirebase();
  const page = await getValue<{
    content: string;
    moreContent: string;
    links: { name: string; link: string }[];
  }>(`/unity/${pageName}`);
  return page || { content: "NOT FOUND", moreContent: "", links: [] };
}

export async function saveUnityTutorial(
  pageName: string,
  data: {
    content: string;
    moreContent: string;
    links: { name: string; link: string }[];
  }
) {
  connectToFirebase();
  await setValue(`/unity/${pageName}`, data);
}

export async function getModsGuide(pageName: string) {
  connectToFirebase();
  const page = await getValue<{
    content: string;
    moreContent: string;
    links: { name: string; link: string }[];
  }>(`/mods-guide/${pageName}`);
  return page || { content: "NOT FOUND", moreContent: "", links: [] };
}

export async function saveModsGuide(
  pageName: string,
  data: {
    content: string;
    moreContent: string;
    links: { name: string; link: string }[];
  }
) {
  connectToFirebase();
  await setValue(`/mods-guide/${pageName}`, data);
}

export async function getOLN() {
  connectToFirebase();
  const categories = await getValue<
    {
      name: string;
      modsInfo: { name: string; link: string; iconUrl: string }[];
    }[]
  >("OLN/categories");
  return { categories: categories || [] };
}

export async function getOLNTextures(
  path: string
): Promise<[texture16: string, texture32: string]> {
  connectToFirebase();
  let texture16 = "";
  let texture32 = "";

  try {
    texture16 = await getFileContent("OLN", `better/${path}`);
  } catch { }
  try {
    texture32 = await getFileContent("OLN", `original/${path}`);
  } catch { }

  return [texture16, texture32];
}
