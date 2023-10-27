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

export default function IncorrectCentroid() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <></>;

  return (
    <DisplayFuzzySet
      sets={[
        {
          fuzzySet: Or(new Triangle(10, 20, 25), new Triangle(40, 45, 50)),
          isShowCentroid: true,
        },
      ]}
      leftX={5}
      rightX={55}
      sizeX={500}
      sizeY={200}
      step={0.01}
    />
  );
}
