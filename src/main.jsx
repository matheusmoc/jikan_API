import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import App from "./App";
import Home from "./pages/Home";
import Animes from "./pages/Animes";

import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="animes" element={<Animes />} />
          {/* <Route path="animes-details/:id" element={<Animes />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
