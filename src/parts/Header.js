import React from "react";
import Button from "elements/Button";
import Icon from "parts/IconText";
import Fade from "react-reveal/Fade";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  if (props.isCentered) {
    return (
      <Fade>
        <header className="spacing-sm ">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Button className="brand-text-icon mx-auto " href="" type="link">
                Stay<span className="text-gray-900">cation</span>
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );
  }

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Icon />

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/test")}`}>
                <Button className="nav-link" type="link" href="/test">
                  Browse By
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/test")}`}>
                <Button className="nav-link" type="link" href="/test">
                  Stories
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/test")}`}>
                <Button className="nav-link" type="link" href="/test">
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
