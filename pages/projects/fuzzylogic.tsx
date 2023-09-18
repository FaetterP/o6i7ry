import DisplayFuzzySet from "fuzzylogic-display/build/components/DisplayFuzzySet";
import { useEffect, useState } from "react";
import { Triangle } from "fuzzylogic-js/build/fuzzySets/Triangle";
import { Rectangle } from "fuzzylogic-js/build/fuzzySets/Rectangle";
import { Or } from "fuzzylogic-js/build/operators/or";

export default function FuzzyLogicProjectPage() {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const triangle = new Triangle(1, 3, 4);
  const rectangle = new Rectangle(-Infinity, 2);
  const finalSet = Or(triangle, rectangle);

  return (
    <div>
      {domLoaded && (
        <DisplayFuzzySet
          sets={[
            {
              fuzzySet: rectangle,
              isShowMaximumLeft: false,
              isShowMaximumMiddle: false,
              isShowMaximumRight: false,
              color: "red",
            },
            {
              fuzzySet: triangle,
              isShowMaximumLeft: false,
              isShowMaximumMiddle: false,
              isShowMaximumRight: false,
              color: "blue",
            },
            {
              fuzzySet: finalSet,
              isShowMaximumLeft: false,
              isShowMaximumMiddle: false,
              isShowMaximumRight: false,
              color: "#00ff0066",
            },
          ]}
          leftX={-1}
          rightX={7}
          sizeX={300}
          sizeY={200}
          step={0.01}
        />
      )}
    </div>
  );
}
