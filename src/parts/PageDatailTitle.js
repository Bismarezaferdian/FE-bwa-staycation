import React from "react";
import Breadcrumb from "../elements/Breadcrumb";

function PageDatailTitle({ data, breadcrumb }) {
  return (
    <section className="container spacing-sm">
      <div className="row align-items-center">
        <div className="col">
          <Breadcrumb data={breadcrumb} />
        </div>

        <div className="col text-center ">
          <h1 className="h2">{data.name}</h1>
          <span>
            {data.categories.city},{data.categories.country}
          </span>
        </div>
        <div className="col"></div>
      </div>
    </section>
  );
}

export default PageDatailTitle;
