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

export default function SliceA() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <></>;

  const A = new Triangle(15, 25, 30);

  return (
    <DisplayFuzzySet
      sets={[
        {
          fuzzySet: Slice(A, 0.5),
          color: "red",
        },
      ]}
      leftX={5}
      rightX={35}
      sizeX={500}
      sizeY={200}
      step={0.01}
    />
  );
}
