export type Project = {
  name: string;
  icon: string;
  type: string;
  urlName: string;
};

export type TutorialItemType =
  | { type: "br" }
  | { type: "hr" }
  | { type: "text"; text: string }
  | { type: "title"; text: string }
  | { type: "b"; text: string }
  | { type: "s"; text: string }
  | { type: "i"; text: string }
  | { type: "img"; src: string }
  | { type: "a"; link: string; name: string }
  | { type: "code"; code: string }
  | { type: "list"; items: ItemType[][] };
