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
  });
  
  // 처음 수정페이지 들어왔을때
  useEffect(() => {
    axios
      .post(`http://localhost:8088/board/detailList/${match.params.seq}`, match.params.seq, {
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
      setBoardValues({
        ...boardValues,
        [e.target.name]: e.target.value,
      });
    };
  
    // 게시글 목록 페이지로 이동
    const boardListPage = () => {
      window.location.href = "/boardList";
    }

    // 게시글 수정하기 클릭 
    const boardUpdateList = () => {
        // e.preventDefault();
        axios
          .post("http://localhost:8088/board/updateList", boardValues, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            alert("게시글 수정 성공");
            window.location.href = "http://localhost:3000/boardList";
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };

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
              </div>
        <br />
          <button type="submit" onClick={boardUpdateList}>
            수정하기
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
