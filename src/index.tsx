import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";

import {App} from "./app";
import {GAProvider} from "./ga-context";
import {UIProvider} from "./ui-context";

const container = document.getElementById("root");
if (!container) {
  throw new Error("missing root element");
}

// The SSR rendering will put a `<script type="application/json">` into the HTML.
// If it's there, great, if it's not there, this'll be `undefined` the
// components will know to fetch it with XHR.
const hydrationElement = document.getElementById("hydration");
const appData = hydrationElement
  ? JSON.parse(hydrationElement.textContent!)
  : {};

let app = (
  <GAProvider>
      <UIProvider>
        <Router>
          <App {...appData} />
        </Router>
      </UIProvider>
  </GAProvider>
);

app = <React.StrictMode>{app}</React.StrictMode>;

if (container.firstElementChild) {
  if (window.origin !== "https://translate.googleusercontent.com") {
    ReactDOM.hydrate(app, container);
  }
} else {
  ReactDOM.render(app, container);
}

