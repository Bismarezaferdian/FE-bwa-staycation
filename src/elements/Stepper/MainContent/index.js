import React from "react";
import { Fade } from "react-reveal";

const MainContent = ({ data, current }) => {
  return (
    // <Fade>{data[current] && data[current].content}</Fade>;
    <Fade>{data[current] && data[current].content}</Fade>
  );
};

export default MainContent;
