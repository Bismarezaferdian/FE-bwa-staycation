import React, { useState } from "react";
import { InputDate } from "elements/Form";

const Show = () => {
  const [state, setState] = useState({
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  });

  const handleChange = (e) => {
    setState({ value: e.target.value });
  };

  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="col-auto">
          <InputDate
            max={30}
            onChange={handleChange}
            name="value"
            value={state.value}
          />
        </div>
      </div>
    </div>
  );
};

export default Show;
