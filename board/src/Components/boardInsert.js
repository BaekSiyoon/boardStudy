import React, { useState } from "react";
import axios from "axios";
import "./board.css";

// 작성 페이지
const boardInsert = () => {
  const [values, setValues] = useState({
    title: "",
    regId: "",
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
    // input 빈칸 체크
    if (
      values.title == "" ||
      values.regId == "" ||
      values.password == "" ||
      values.content == ""
    ) {
      alert("값을 입력해 주세요.");
      e.preventDefault();
    } else {
      axios
        .post("http://localhost:8088/board/insertList", values, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          alert("게시글 작성 성공");
          window.location.href = "http://localhost:3000/boardList";
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  // 게시글 목록 페이지로 이동
  const boardListPage = () => {
    window.location.href = "/boardList";
  };

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
            name="regId"
            value={values.regId}
            onChange={handleChange}
          />
          <div> 비밀번호 </div>
          <input
            type="password"
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
        <button onClick={boardListPage}>목록</button>
      </div>
    </div>
  );
};

export default boardInsert;
