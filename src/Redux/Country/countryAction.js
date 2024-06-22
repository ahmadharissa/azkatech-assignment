import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CountryAction } from "./countryReducer";

export const getCountries = () => async (dispatch) => {
  try {
    dispatch(CountryAction.CountryRequest());

    const res = await axios.get(process.env.REACT_APP_API + "/v3.1/all");

    dispatch(CountryAction.CountrySuccess(res?.data));
  } catch (error) {
    dispatch(CountryAction.CountryFailure(error?.response?.data?.message));
    toast.error("Country Failed", {
      position: toast.POSITION,
      autoClose: 2000,
      theme: "colored",
    });
  }
};
