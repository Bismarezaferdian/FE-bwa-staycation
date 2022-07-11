import { CHECKOUT_BOOKING } from "../types";
import axios from "configs/axios";

export const checkoutBooking = (payload) => (dispatch) => {
  dispatch({
    type: CHECKOUT_BOOKING,
    //menerima payload dari starbooking (booking foarm )
    payload: payload,
  });
};

export const submitBooking = (payload) => () => {
  return axios.post(`/booking-page`, payload, {
    headers: { contentType: "multipart/form-data" },
  });
};


//error cors dari backend , untuk allow cors perlu di tambahkan pakage cors dan use cors , 
