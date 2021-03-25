import React from "react";
import IconTextt from "parts/IconText";
import Button from "elements/Button";

export default function footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <IconTextt />
            <p className="brand-tagline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rem
              fugit nostrum cumque!
            </p>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2"> For beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/booking">
                  Start and Booking Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/payment">
                  Use Payment
                </Button>
              </li>
            </ul>
          </div>

          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Use</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/carriers">
                  Our Carrier
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/term">
                  Term & condition
                </Button>
              </li>
            </ul>
          </div>

          <div className="col-4 mr-5">
            <h6 className="mt-2">Explore Use</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:staycation@gmail.com"
                >
                  staycation@gmail.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+622122081996">
                  021-2208-1996
                </Button>
              </li>
              <li className="list-group-item">
                <span>StayCation Kemang ,Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2019 * all rights reserved * staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
