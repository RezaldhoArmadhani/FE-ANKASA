import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import store, { persistor } from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  //   <PersistGate loading={null} persistor={persistor}>
  <App />
  //   {/* </PersistGate>
  // </Provider> */}
);
