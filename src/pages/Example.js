import React, { Component } from "react";
import InputDate from "elements/Form/InputDate";
import BreadCrumb from "elements/Breadcrumb";
import InputNumber from "elements/Form/InputNumber";
// import { Component } from "react";

export default class Example extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  // state = {
  //   value: "2",
  // };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const breadcrumb = [
      { pageTitle: "home", pageHref: "" },
      { pageTitle: "House Detail", pageHref: "" },
    ];

    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <BreadCrumb data={breadcrumb} />

            {/* <InputNumber
              max={30}
              onChange={this.handleChange}
              isSuffixPlurel
              name="value"
              value={this.state.value}
            /> */}

            <InputDate
              max={30}
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            />
          </div>
        </div>
      </div>
    );
  }
}
