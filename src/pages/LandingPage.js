import React, { Component } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import landingPage from "json/landingPage.json";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero}></Hero>
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        ></MostPicked>
        <Categories data={landingPage.categories}></Categories>
      </>
    );
  }
}
