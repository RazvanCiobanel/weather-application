import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import { persistor } from "./redux/store";
import Home from "./pages/Home";
import LocalWeather from "./pages/LocalWeather";
import Forecast from "./pages/Forecast";
import WorldWeather from "./pages/WorldWeather";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="local-weather" exact element={<LocalWeather />} />
              <Route path="forecast" exact element={<Forecast />} />
              <Route path="world-weather" exact element={<WorldWeather />} />
            </Route>
          </Routes>
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
