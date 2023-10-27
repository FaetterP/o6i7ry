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

export default function AB() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <></>;

  const A = new Triangle(15, 25, 30);
  const B = new Rectangle(10, 25, 0.7);

  return (
    <DisplayFuzzySet
      sets={[
        {
          fuzzySet: A,
          color: "red",
        },
        {
          fuzzySet: B,
          color: "blue",
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
