import React from "react";
import Fade from "react-reveal/Fade";

function FeaturedImage({ data }) {
  return (
    <>
      <section className="container ">
        <div className="container-grid sm">
          {data.map((item, index) => {
            return (
              <div
                key={`FeaturedImage-${index}`}
                className={`item ${index > 0 ? "column-5" : "column-7"} 
                ${index > 0 ? "row-1" : "row-2"}`}
              >
                <Fade bottom delay={300 * index}>
                  <div className="card h-100">
                    <figure className="img-wrapper">
                      <img src={item.imageUrl? `${process.env.REACT_APP_HOST}/${item.imageUrl}`
                            : ""} alt={index} />
                    </figure>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default FeaturedImage;
