import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BoardList from "./Components/boardList";

const App = () => {
  return (
    <div>
      <listHome />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BoardList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
