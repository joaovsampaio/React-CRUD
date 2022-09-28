import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Table from "./Table";
import Update from "./Update";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/table" element={<Table />} />
      <Route path="/update" element={<Update />} />
    </Routes>
  );
}

export default Main;
