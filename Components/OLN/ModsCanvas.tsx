import React from "react";
import { Stage, Layer } from "react-konva";
import ModElement from "./ModElement";

type PropsType = {
  sizeX: number;
  modsInfo: { name: string; link: string; iconUrl: string }[];
};

export default function ModsCanvas({ sizeX, modsInfo }: PropsType) {
  function getHeight() {
    const length = modsInfo.length;
    let ret = 150 + 100 * Math.floor((length - 1) / sizeX);

    if (length % sizeX === 1) {
      ret -= 50;
    }

    return ret;
  }

  return (
    <Stage width={1200} height={getHeight()}>
      <Layer>
        {modsInfo.map((item, index) => (
          <ModElement
            key={item.name}
            x={index % sizeX}
            y={Math.floor(index / sizeX)}
            iconUrl={item.iconUrl}
          />
        ))}
      </Layer>
    </Stage>
  );
}
