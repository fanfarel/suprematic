import dataset from "../dataset";
import OneElem from "./OneElement";
import { useState } from "react";
import _ from "lodash";

// const arr = ;

const Elements = (props) => {
  const [positions, setPositions] = useState(dataset);
  console.info(positions);
  return (
    <div>
      <OneElem></OneElem>
      <button
        onClick={() => {
          setPositions(_.shuffle(dataset));
        }}
      >
        984648
      </button>
    </div>
  );
};
export default Elements;
