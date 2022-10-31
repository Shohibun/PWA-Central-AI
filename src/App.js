import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutHome from "./layouts/LayoutHome";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LayoutHome />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
