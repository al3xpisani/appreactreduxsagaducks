import React, { Fragment } from "react";
import { Provider } from "react-redux";
import "./config/reactotron";
import store from "./store-redux";

import Routes from "./routes";
import Footer from "./components/Footer";

const App = () => (
  <Fragment>
    <Provider store={store}>
      <Routes />
      <Footer />
    </Provider>
  </Fragment>
);

export default App;
