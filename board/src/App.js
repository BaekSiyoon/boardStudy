import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BoardList from "./Components/boardList";
import BoardDetail from "./Components/boardDetail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BoardList />} />
          <Route path="/boardDetail" element={<BoardDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
