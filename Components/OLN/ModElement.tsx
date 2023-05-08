import React, { useState } from "react";
import { Image, Group } from "react-konva";
import useImage from "use-image";

type PropsType = {
  x: number;
  y: number;
  iconUrl: string;
};

const HEXAGON_IMAGE_PATH = "https://raw.githubusercontent.com/FaetterP/OLN/Magic/assets/thaumcraft/textures/gui/hex1.png"
const HEXAGON_SELECTED_IMAGE_PATH = "https://raw.githubusercontent.com/FaetterP/OLN/Magic/assets/thaumcraft/textures/gui/hex2.png"

export default function ModElement(props: PropsType) {
  let [getSelected, setSelected] = useState(false);
  const [imageBackground] = useImage(HEXAGON_IMAGE_PATH);
  const [imageBackgroundSelected] = useImage(HEXAGON_SELECTED_IMAGE_PATH);
  const [imageIcon] = useImage(props.iconUrl);

  const size = 100;
  const r = size / 2;
  const x = props.x * (r * 1.5) + 50;
  const y = (props.y + props.x * 0.5 - Math.floor(props.x / 2)) * r * 2;

  return (
    <Group>
      <Image
        image={getSelected ? imageBackgroundSelected : imageBackground}
        x={x}
        y={y}
        width={size}
        height={size}
        shadowBlur={5}
        onMouseEnter={(e) => {
          setSelected(true);
        }}
        onMouseLeave={(e) => {
          setSelected(false);
        }}
      />
      <Image
        image={imageIcon}
        x={x + size / 4}
        y={y + size / 4}
        width={size / 2}
        height={size / 2}
        shadowBlur={5}
        onMouseEnter={(e) => {
          setSelected(true);
        }}
        onMouseLeave={(e) => {
          setSelected(false);
        }}
      />
    </Group>
  );
}
