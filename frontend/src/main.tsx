import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Dashboard from "./components/Dashboard/Dashboard";
import Friends from "./components/Friends/Friends";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Dashboard />} />
          <Route path="friends" element={<Friends />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
