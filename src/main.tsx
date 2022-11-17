import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

//o ponto de interrogação avisa o ts que o elemento em questão nunca vai ser nulo e ele pode confiar (usar só em casos muito específicos)
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
