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

export default function Temperature() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <></>;

  const cold = Or(new Triangle(14, 15, 20), new Rectangle(-Infinity, 15));
  const warm = new Triangle(15, 25, 35);
  const hot = Or(new Triangle(25, 35, 36), new Rectangle(35, Infinity));

  return (
    <DisplayFuzzySet
      sets={[
        {
          fuzzySet: cold,
        },
        {
          fuzzySet: warm,
        },
        {
          fuzzySet: hot,
        },
      ]}
      leftX={10}
      rightX={40}
      sizeX={500}
      sizeY={200}
      step={0.01}
    />
  );
}
