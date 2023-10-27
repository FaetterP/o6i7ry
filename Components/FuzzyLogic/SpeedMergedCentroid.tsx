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
  Implication,
  Relationship,
} from "fuzzylogic-js";

export default function SpeedMergedCentroid() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <></>;

  const cold = Or(new Rectangle(-Infinity, 10), new Triangle(9, 10, 15));
  const warm = new Triangle(15, 25, 35);
  const hot = Or(new Rectangle(35, Infinity), new Triangle(25, 35, 36));

  const slow = new Triangle(600, 700, 800);
  const fast = new Triangle(700, 900, 1000);

  const imps: Implication[] = [
    { if: cold, then: slow, weight: 1 },
    { if: warm, then: slow, weight: 0.7 },
    { if: hot, then: slow, weight: 0.1 },
    { if: cold, then: fast, weight: 0 },
    { if: warm, then: fast, weight: 0.4 },
    { if: hot, then: fast },
  ];
  const rel = new Relationship([cold, warm, hot], [slow, fast], imps);

  return (
    <DisplayFuzzySet
      sets={[
        {
          fuzzySet: rel.getResultSet(27),
          color: "blue",
          isShowCentroid: true,
        },
      ]}
      leftX={500}
      rightX={1100}
      sizeX={500}
      sizeY={200}
      step={1}
    />
  );
}
