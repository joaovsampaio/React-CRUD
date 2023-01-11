import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Table from "./Table";
import Update from "./Update";
import NotFound from "./NotFound";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/table" element={<Table />} />
      <Route path="/update:productId" element={<Update />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Main;
