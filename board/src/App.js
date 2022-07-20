import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BoardList from "./Components/boardList";
import BoardInsert from "./Components/boardInsert";
import BoardDetail from "./Components/boardDetail";
import BoardUpdate from "./Components/boardUpdate";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BoardList />} />
          <Route path="/boardInsert" element={<BoardInsert />} />
          <Route path="/boardDetail" element={<BoardDetail />} />
          <Route path="/boardUpdate" element={<BoardUpdate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
