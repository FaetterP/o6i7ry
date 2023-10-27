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

export default function SpeedSliced() {
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
          fuzzySet: Slice(slow, 0.7),
          color: "blue",
        },
        {
          fuzzySet: Slice(fast, 0.4),
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
