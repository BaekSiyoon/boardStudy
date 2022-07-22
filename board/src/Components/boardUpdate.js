import React, { useEffect, useState } from "react";
import axios from "axios";
import "./board.css";

// 게시글 수정 페이지
const boardUpdate = ({match}) => {
  console.log(match);

  const [boardValues, setBoardValues] = useState({
    seq: "",
    title: "",
    regId: "",
    content: "",
    regDate: "",
  });
  
  useEffect(() => {
    axios
      .post(`http://localhost:8088/board/updateList/${match.params.seq}`, match.params.seq, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setBoardValues(res.data[0]);
        console.log("res" + res);
        console.log("JSON.stringify(res.data)" + JSON.stringify(res.data[0]));
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);
    
    // 게시글 data 수정 
    const handleChange = (e) => {
      console.log(e);
      console.log("e" + e);
      console.log("e.target.name" + e.target.name);
      console.log("e.target.value" + e.target.value);
      setBoardValues({
        ...boardValues,
        [e.target.name]: e.target.value,
      });
    };
  

  // 게시글 목록 페이지로 이동
  const boardListPage = () => {
    window.location.href = "/boardList";
  }

return (
  <div className="boardUpdateDiv">
    <h1>수정페이지 {match.params.seq}</h1>
      <div>
        <form>
          <div>
            <div> 제목 </div>
            <input
              type="text"
              name="title"
              value={boardValues.title || ""}
              onChange={(e) => {handleChange(e)}}
              />
              <div> 작성자 </div>
              <input
              type="text"
              name="regId"
              value={boardValues.regId || ""} 
              onChange={(e) => {handleChange(e)}}
              />
              <div> 내용 </div>
              <input
              type="text"
              name="content"
              value={boardValues.content  || ""}
              onChange={(e) => {handleChange(e)}}
              />
              <div> 날짜 </div>
              <input
              type="text"
              name="regDate"
              value={boardValues.regDate  || ""}
              readonly
              />
              </div>
        <br />
          <button type="submit">
            작성하기
          </button>
        </form>
          <button onClick={boardListPage}>
            목록
          </button>
      </div>
    </div>
  );
};

export default boardUpdate;
