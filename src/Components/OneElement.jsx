import dataset from "../dataset";
import _ from "lodash";

const OneElem = (props) => {
  console.info(props);
  return dataset.map((e) => {
    return (
      <div className="element" key={e.id}>
        <div>{e.figure}</div>
      </div>
    );
  });
};

export default OneElem;
