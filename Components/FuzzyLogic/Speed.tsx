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

export default function Speed() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <></>;

  const slow = new Triangle(600, 700, 800);
  const fast = new Triangle(700, 900, 1000);

  return (
    <DisplayFuzzySet
      sets={[
        {
          fuzzySet: slow,
          color: "blue",
        },
        {
          fuzzySet: fast,
          color: "blue",
        },
      ]}
      leftX={500}
      rightX={1100}
      sizeX={500}
      sizeY={200}
      step={10}
    />
  );
}
