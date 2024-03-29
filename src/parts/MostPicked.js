import React from "react";
import Button from "elements/Button";
import { Fade } from "react-reveal";

export default function MostPicked(props) {
  return (
    <Fade bottom>
      <section className="container" ref={props.refMostPicked}>
        <h4 className="mb-3">MostPicked</h4>
        <div className="container-grid">
          {props.data.map((item, i) => {
            return (
              <div
                key={`mostpiked ${i}`}
                className={`item column-4 ${i === 0 ? "row-2" : "row-1"}`}
              >
                <div className="card card-featured">
                  <div className="tag">
                    ${item.price}
                    <span className="font-weight-light">per {item.unit}</span>
                  </div>
                  <figure className="img-wrapper">
                    <img
                      src={item.imageId[0]?`${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`:""}
                      alt={item.name}
                      className="img-cover"
                    />{" "}
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      className="stretched-link d-block text-white"
                      type="link"
                      href={`/properties/${item._id}`}
                    >
                      <h5>{item.name}</h5>
                    </Button>
                    <span>
                      {item.title}
                    </span>
                    <span>
                      {item.city},
                      {item.country}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Fade>
  );
}
