import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import RootReducer from "./rootreducer";

const reducer = RootReducer;

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
