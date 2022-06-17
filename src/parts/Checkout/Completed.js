import React from "react";
import { Fade } from "react-reveal";

import CompletedImage from "assets/image/completed.jpg";

const Completed = () => {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img src={CompletedImage} alt="completed checkout apartement" />
            <p className="text-gray-500">
              We will inform you via email latter once the transaction has been
              accept
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Completed;
