import { useState } from "react";
import styles from "./Builder.module.scss";

type PropsType = {
  nameDisplay: string;
  modFolder: string;
  iconUrl: string;

  addMod: (name: string) => void;
  removeMod: (name: string) => void;
};

export default function ModCard(props: PropsType) {
  const [isEnabled, setIsEnabled] = useState(false);

  function Activate() {
    setIsEnabled(true);
    props.addMod(props.modFolder);
  }

  function Deactivate() {
    setIsEnabled(false);
    props.removeMod(props.modFolder);
  }

  function Click() {
    if (isEnabled) {
      Deactivate();
    } else {
      Activate();
    }
  }

  return (
    <article
      className={`${styles.modBlock} ${isEnabled ? styles.enabled : ""}`}
      onClick={Click}
    >
      <figure>
        <img src={props.iconUrl} />
        <figcaption>
          <span>{props.nameDisplay}</span>
        </figcaption>
      </figure>
    </article>
  );
}
