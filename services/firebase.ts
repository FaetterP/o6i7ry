import { FirebaseApp, initializeApp } from "firebase/app";
import { getDatabase, ref, get, child, set } from "firebase/database";
import config from "config";
import { HttpError } from "utils.ts/HttpError";
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

type FolderInfo = {
  name: string;
  content: string[];
  isFolder: boolean;
};

type contentItemInfo = { name: string; isFolder: boolean };
let app: FirebaseApp | undefined = undefined;

export function connectToFirebase() {
  const firebaseConfig = config.get<FirebaseConfig>("firebase.config");
  app = initializeApp(firebaseConfig);
}

export async function getFolderContent(
  resourcepack: string,
  branch: string,
  path: string
): Promise<contentItemInfo[]> {
  connectToFirebase();
  path = path.replaceAll("/", " ").replaceAll(".", ",");
  const value = await getValue<FolderInfo>(
    `${resourcepack}-assets/${branch}/assets${path ? ` ${path}` : ""}`
  );
  if (!value.isFolder) {
    throw new HttpError(400, "this is not folder");
  }

  const ret: contentItemInfo[] = [];
  const promises: Promise<void>[] = [];

  value.content.forEach((item) => {
    const promise = new Promise<void>(async (resolve, reject) => {
      const isFolder = await getValue<boolean>(
        `${resourcepack}-assets/${branch}/assets ${
          path ? `${path} ` : ``
        }${item.replaceAll(".", ",")}/isFolder`
      );
      ret.push({ name: item, isFolder: isFolder });
      resolve();
    });
    promises.push(promise);
  });

  await Promise.all(promises);
  return ret;
}

export async function getFileContent(
  resourcepack: string,
  branch: string,
  path: string
) {
  path = path.replaceAll("/", " ").replaceAll(".", ",");
  const content = await getValue<string>(
    `${resourcepack}-assets/${branch}/assets${path ? ` ${path}` : ""}/content`
  );
  return content;
}

async function getValue<T>(path: string) {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, path));

  if (!snapshot.exists()) {
    throw new Error("snapshot does not exist");
  }

  return snapshot.val() as T;
}

export async function setValue(path: string, data: any) {
  connectToFirebase();
  const dbRef = ref(getDatabase(), path);
  await set(dbRef, data);
}

export async function getProjects() {
  connectToFirebase();
  const projects =
    getValue<Project[]>("/projects");
  return projects;
}
