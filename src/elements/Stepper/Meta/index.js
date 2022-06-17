import React from "react";
import { Fade } from "react-reveal";

const Meta = ({ data, current }) => {
  return (
    <Fade delay={300}>
      <div className="text-center" style={{ marginBottom: 30, marginLeft: 50 }}>
        <h1 className="h2">{data[current] && data[current].title}</h1>
        <p className="lead text-gray-500">
          {data[current] && data[current].description}
        </p>
      </div>
    </Fade>
  );
};

export default Meta;
