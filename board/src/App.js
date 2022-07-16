import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./Components/test";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
