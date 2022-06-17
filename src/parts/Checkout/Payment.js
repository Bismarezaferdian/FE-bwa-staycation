import React from "react";
import { Fade } from "react-reveal";

import Bca from "assets/image/logo-bca.jpg";
import Mandiri from "assets/image/logo-mandiri.jpg";

import InputFile from "elements/Form/InputFile";
import InputText from "elements/Form/InputText";

const Payment = (props) => {
  const { data, ItemDetails, checkout } = props;

  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center ">
          <div
            className="col-5 border-right py-5 "
            style={{ paddingRight: 80 }}
          >
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran</p>
              <p>tax : ${tax}%</p>
              <p>Sub Total : $ {subTotal} USD</p>
              <p>Total : ${grandTotal} USD</p>
              <div className="row mt-4 ">
                <div className="col-3 text-right ">
                  <img src={Bca} alt="bank central asia " width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank central Asia </dd>
                    <dd>2208 1996</dd>
                    <dd>Bisma Reza Ferdian </dd>
                  </dl>
                </div>
              </div>
              <div className="row">
                <div className="col-3 text-right  ">
                  <img src={Mandiri} alt="mandiri" width="60" />
                </div>

                <div className="col">
                  <dl>
                    <dd>Bank Mandiri </dd>
                    <dd>2208 2995</dd>
                    <dd>Bisma Reza Ferdian</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>

          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment">
                Upload Bukti Transfer
                </label>
              <InputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />
              <label htmlFor="bankName">
                Bank Asal
                </label>
              <InputText
                id="bankName"
                name="bankName"
                value={data.bankName}
                onChange={props.onChange}
              />
              <label htmlFor="bankHolder">Nama Pengirim</label>
              <InputText
                id="bankHolder"
                name="bankHolder"
                type="text"
                value={data.bankHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Payment;
