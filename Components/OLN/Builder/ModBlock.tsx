import { useState } from "react";

type PropsType = {
  nameDisplay: string;
  modFolder: string;
  iconUrl: string;

  addMod: (name: string) => void;
  removeMod: (name: string) => void;
};

export default function ModBlock(props: PropsType) {
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
    <>
      <div>
        <img src={props.iconUrl} />
        <span style={isEnabled ? { color: "red", cursor:"pointer" } : { color: "white", cursor:"pointer" }} onClick={Click}>
          {props.nameDisplay}
        </span>
      </div>
    </>
  );
}
