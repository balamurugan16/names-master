import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
