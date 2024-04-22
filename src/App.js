import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Checkout,
  HomePage,
  Navbar,
  ProductPage,
  SearchResults,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
