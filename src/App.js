import React from "react";
import { Provider } from "react-redux";
import { Router } from "./components/Routes";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};
