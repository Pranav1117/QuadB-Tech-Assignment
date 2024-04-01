import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* we need to wrap our whole app with the stoe so that every component can access the redux store and state */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
