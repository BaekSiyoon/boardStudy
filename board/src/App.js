import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import BoardList from "./Components/boardList";
import BoardInsert from "./Components/boardInsert";
import BoardDetail from "./Components/boardDetail";
import BoardUpdate from "./Components/boardUpdate";

const App = () => {
  return (
    <div>
      <BrowserRouter>    
          <Route path="/boardList"  component={BoardList} />
          <Route path="/boardInsert" component={BoardInsert} />
          <Route path="/boardDetail/:seq" component={BoardDetail} />
          <Route path="/boardUpdate/:seq" component={BoardUpdate} />
      </BrowserRouter>
    </div>
  );
};

export default App;
