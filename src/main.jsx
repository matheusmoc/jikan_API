import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import App from "./App";
import Home from "./pages/Home";
import Characters from "./pages/Characters";

import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="characters" element={<Characters />} />
          <Route path="characters/:id" element={<Characters />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
