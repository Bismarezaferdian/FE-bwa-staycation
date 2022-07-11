import React, { Component } from "react";

import Header from "parts/Header";
import PageDatailTitle from "parts/PageDatailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Testimony from "parts/Testimony";
import Footer from "parts/footer";
import { Fade } from "react-reveal";

import { checkoutBooking } from "store/actions/checkout";
import { connect } from "react-redux";
import { fetchPage } from "store/actions/page";
import Activities from "parts/Activities";

class PageDetail extends Component {
  constructor(props){
    super(props);
    this.refMosPicked= React.createRef()}

  componentDidMount() {
    window.title = "Detail Page";
    window.scrollTo(0, 0);
    if(!this.props.page[this.props.match.params.id])
    this.props.fetchPage(
      `/detail-page/${this.props.match.params.id}`,this.props.match.params.id
    );
    
  }

  render() {
    const {page,match } = this.props
    // console.log(this.props);
    if(!page[match.params.id])return null
    const breadcrumb = [
      { pageTitle: "home", pageHref: "/" },
      { pageTitle: "House Detail", pageHref: "" },
    ];
    return (  
      <>
        {/* <Header /> */}
        <Header {...this.props} />
        <PageDatailTitle breadcrumb={breadcrumb} data={page[match.params.id]} />
        <FeaturedImage data={page[match.params.id].imageId} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription data={page[match.params.id]} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm
                  itemDetails={page[match.params.id]}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>

        <Activities data={page[match.params.id].activityId} />
        <Testimony data={page[match.params.id].testimonial} />

        <Footer />
      </>
    );
  }
}

const mapStateToProps= (state)=>({
  page : state.page
})
export default connect(mapStateToProps, { checkoutBooking,fetchPage })(PageDetail);
