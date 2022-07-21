import React, { useState } from "react";
import axios from "axios";
import "./board.css";

// 작성 페이지
const boardInsert = () => {
  const [values, setValues] = useState({
    title: "",
    id: "",
    password: "",
    content: "",
  });

  const handleChange = (e) => {
    console.log(e);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

// 게시글 작성 클릭시
  const handleSubmit = (e) => {
    alert(JSON.stringify(values, null, 2));
    // e.preventDefault();
    axios
      .post("http://localhost:8088/board/insertList", values, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        alert("게시글 작성 성공");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
// 게시글 목록 페이지로 이동
  const boardListPage = () =>{
    window.location.href = "/boardList";
  }
  return (
    <div className="boardInsertDiv">
      <h2>작성 페이지 </h2>
      <div>
        <form>
          <div> 제목 </div>
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
          />
          <div> 작성자 </div>
          <input
            type="text"
            name="id"
            value={values.id}
            onChange={handleChange}
          />
          <div> 비밀번호 </div>
          <input
            type="text"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <div> 내용 </div>
          <input
            type="text"
            name="content"
            value={values.content}
            onChange={handleChange}
          />
          <br />
          <button type="submit" onClick={handleSubmit}>
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

export default boardInsert;
