import { DisplayFuzzySet } from "fuzzylogic-display";
import { useEffect, useState } from "react";
import {
  Triangle,
  Rectangle,
  And,
  Or,
  Not,
  Very,
  Slightly,
  Slice,
  Gaussian,
  Sigmoid,
} from "fuzzylogic-js";

export default function ColdHot() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <></>;

  return (
    <DisplayFuzzySet
      sets={[
        {
          fuzzySet: Or(new Triangle(14, 15, 30), new Rectangle(-Infinity, 15)),
          color: "red",
        },
        {
          fuzzySet: Or(new Triangle(15, 30, 31), new Rectangle(30, Infinity)),
          color: "blue",
        },
      ]}
      leftX={10}
      rightX={35}
      sizeX={500}
      sizeY={200}
      step={0.01}
    />
  );
}
