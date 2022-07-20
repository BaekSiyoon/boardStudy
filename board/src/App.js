import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BoardList from "./Components/boardList";
import BoardInsert from "./Components/boardInsert";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BoardList />} />
          <Route path="/boardInsert" element={<BoardInsert />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
