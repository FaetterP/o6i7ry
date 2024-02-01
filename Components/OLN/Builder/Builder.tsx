import axios from "axios";
import { useState } from "react";
import ModBlock from "./ModBlock";

export default function OLNBuilder() {
  let mods: string[] = ["minecraft", "nei", "baubles"];

  function download() {
    axios
      .post("/api/OLN/build", { mods }, { responseType: "blob" })
      .then((response) => {
        const href = URL.createObjectURL(response.data);
        const link = document.createElement("a");
        link.href = href;
        link.setAttribute("download", "OLN.zip");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
      });
  }

  function addMod(name: string) {
    mods = [...mods, name];
  }

  function removeMod(name: string) {
    mods = mods.filter((mod) => mod != name);
  }

  const modsBlocks: {
    nameDisplay: string;
    iconUrl: string;
    modFolder: string;
  }[] = [
    { nameDisplay: "Blood Magic", iconUrl: "", modFolder: "alchemicalwizardry" },
    { nameDisplay: "Alfheim", iconUrl: "", modFolder: "alfheim" },
    { nameDisplay: "Ars Magica 2", iconUrl: "", modFolder: "arsmagica2" },
    { nameDisplay: "Automagy", iconUrl: "", modFolder: "automagy" },
    { nameDisplay: "Blood Arsenal", iconUrl: "", modFolder: "bloodarsenal" },
    { nameDisplay: "Botania", iconUrl: "", modFolder: "botania" },
    { nameDisplay: "Divine RPG", iconUrl: "", modFolder: "divinerpg" },
    { nameDisplay: "Forbidden Magic", iconUrl: "", modFolder: "forbidden" },
    { nameDisplay: "Gadomancy", iconUrl: "", modFolder: "gadomancy" },
    { nameDisplay: "Tainted Magic", iconUrl: "", modFolder: "taintedmagic" },
    { nameDisplay: "Thaumcraft 4", iconUrl: "", modFolder: "thaumcraft" },
    { nameDisplay: "Thaumic Dyes", iconUrl: "", modFolder: "thaumicdyes" },
    { nameDisplay: "Thaumic Exploration", iconUrl: "", modFolder: "thaumicexploration" },
    { nameDisplay: "Thaumic Horizons", iconUrl: "", modFolder: "thaumichorizons" },
    { nameDisplay: "Thaumic Tinkerer", iconUrl: "", modFolder: "ttinkerer" },
    { nameDisplay: "Twilight Forest", iconUrl: "", modFolder: "twilightforest" },
    { nameDisplay: "Witchery", iconUrl: "", modFolder: "witchery" },
    { nameDisplay: "Witching Gadgets", iconUrl: "", modFolder: "witchinggadgets" },
  ];

  return (
    <>
      {modsBlocks.map((info) => (
        <ModBlock
          nameDisplay={info.nameDisplay}
          iconUrl={info.iconUrl}
          modFolder={info.modFolder}
          addMod={addMod}
          removeMod={removeMod}
        />
      ))}
      <button onClick={download}>Скачать</button>
    </>
  );
}
