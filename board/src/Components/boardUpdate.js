import React, { useEffect, useState } from "react";
import axios from "axios";
import "./board.css";

// 게시글 수정 페이지
const boardUpdate = ({match}) => {
  console.log(match);

  const [boardValues, setBoardValues] = useState({
    seq: "",
    title: "",
    id: "",
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
        setBoardValues(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);
    
  // 게시글 data 수정 
  const handleChange = (e) => {
    console.log(e);
    // 우선 e.target 에서 name 과 value 를 추출
    const { value, name } = e.target; 
    setBoardValues({
      ...boardValues,
      // name 키를 가진 값을 value 로 설정
      [name]: value
      });
  };

  // 게시글 목록 페이지로 이동
  const boardListPage = () => {
    window.location.href = "/boardList";
  }

return (
    <div className="boardUpdateDiv">
      <h1>수정 페이지</h1>
      <div>
        <form>
          <div> 제목 </div>
          {Object.values(boardValues).map((v) => (
            <input
              type="text"
              name="title"
              defaultValue={v.title}
              onChange={handleChange}
            />
          ))}
          <div> 작성자 </div>
          {Object.values(boardValues).map((v) => (
            <input
              type="text"
              name="id"
              defaultValue={v.regId}
              onChange={handleChange}
            />
          ))}
          <div> 내용 </div>
          {Object.values(boardValues).map((v) => (
            <input
              type="text"
              name="content"
              defaultValue={v.content}
              onChange={handleChange}
            />
          ))}
          <div> 날짜 </div>
          {Object.values(boardValues).map((v) => (
            <input
              type="text"
              name="regDate"
              defaultValue={v.regDate}
              onChange={handleChange}
            />
          ))}
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
