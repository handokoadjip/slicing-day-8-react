import React, { useState, useEffect } from "react";
import $ from "jquery";

import Home from "containers/pages/Home/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    $(document).ready(function () {
      $(document).scroll(function () {
        const nav = $(".navbar.fixed-top");
        nav.toggleClass("scrolled", $(this).scrollTop() > nav.height());
      });
    });
  });

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
