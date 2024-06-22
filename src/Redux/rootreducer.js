import { combineReducers } from "redux";

import CountrySlice from "./Country/countryReducer";

const rootreducer = combineReducers({
  CountryReducer: CountrySlice.reducer,
});

export default rootreducer;
