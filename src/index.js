import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "./Reducers";
import thunk from "redux-thunk";

export const store = createStore(reducers, applyMiddleware(thunk));

const showState = () => {
  console.log(store.getState());
};

store.subscribe(showState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
