import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

import { Provider } from "react-redux";
import { Store } from "./store";


ReactDOM.render(
  <Provider store={Store} >
  
    <link href="css/bootstrap.min.css" rel="stylesheet"></link>
    <App/>
    
    
  </Provider>,
  document.getElementById("root")
);
