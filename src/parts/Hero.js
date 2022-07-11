import React from "react";
// import { Fade } from "react-reveal";

import ImgHero from "assets/image/img-hero.jpg";
import Frame from "assets/image/img-hero-frame.jpg";
import Bag from "assets/image/icon/icon-traveler.svg";
import Poto from "assets/image/icon/icon-treasure.svg";
import Location from "assets/image/icon/icon-cities.svg";

import Button from "elements/Button";
import FormatNumber from "utiltis/number";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  }

  return (
    // <Fade count duration={2000}>
    <section className="container pt-4">
      <div className="row align-item-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className=" font-weight-bold line-height-1 mb-3">
            Forget Busy Work,
            <br />
            Start Next Vocation
          </h1>
          <p
            className="mb-4 font-weight-light text-gray-500 w-75"
            style={{ lineHeight: "170%" }}
          >
            We provide what need to enjoy your holiday with family. time to make
            another memorable moment.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show me now
          </Button>
          <div className="row " style={{ marginTop: 80 }}>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={Bag}
                alt={`${props.data.traveler} traveler`}
              />
              <h6 mt-3="true">
                {FormatNumber(props.data.traveler)}{" "}
                <span className="text-gray-500 font-weight-light">
                  traveler
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={Poto}
                alt={`${props.data.treasure} treasures`}
              />
              <h6 mt-3="true">
                {FormatNumber(props.data.treasure)}
                <span className="text-gray-500 font-weight-light">Treasur</span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={Location}
                alt={`${props.data.cities} cities`}
              />
              <h6 mt-3="true">
                {FormatNumber(props.data.cities)}
                <span className="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5">
          <div style={{ width: 510, height: 410 }}>
            <img
              src={ImgHero}
              alt="Rom with couches"
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={Frame}
              alt="Rom with couches frame"
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </section>
    // </Fade>
  );
}
