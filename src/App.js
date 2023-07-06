import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fullpage from "./Fullpage";
import Card from "./Card";
import List from "./List";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="user/:id" element={<Fullpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App