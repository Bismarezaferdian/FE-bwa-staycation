import React, { Component } from "react";

import Header from "parts/Header";
import PageDatailTitle from "parts/PageDatailTitle";
import ItemDetails from "json/itemDetails.json";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/footer";
import { Fade } from "react-reveal";

import { checkoutBooking } from "store/actions/checkout";
import { connect } from "react-redux";

class PageDetail extends Component {
  // constructor(props){
  //   super(props);
  //   this.refMosPicked= React.createRef()}

  componentDidMount() {
    window.title = "Detail Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "home", pageHref: "/" },
      { pageTitle: "House Detail", pageHref: "" },
    ];
    return (
      <>
        <Header />
        {/* <Header {...this.props} /> */}
        <PageDatailTitle breadcrumb={breadcrumb} data={ItemDetails} />
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom delay={500}>
                <PageDetailDescription data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm
                  itemDetails={ItemDetails}
                  //start booking dilewatkan ke dalam parameter checkoutBooking
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>
        <Categories data={ItemDetails.categories} />
        <Testimony data={ItemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}

export default connect(null, { checkoutBooking })(PageDetail);
