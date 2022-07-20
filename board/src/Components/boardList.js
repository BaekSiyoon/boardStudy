import React, { useEffect, useState } from "react";
import axios from "axios";
import "./board.css";

// 게시글 목록 페이지
const boardList = () => {
  const [values, setValues] = useState({
    title: "",
    id: "",
    content: "",
    regDate: "",
  });

  // 클릭시 작성 페이지로 이동
  const userWriting = () => {
    window.location.href = "/boardInsert";
  };

  // 클릭시 게시글 상세 페이지로 이동 (파라미터 던져줘야함)
  const userDetailClick = () => {
    window.location.href = "/boardDetail";
  };

  // useEffect는 첫번째 인자로 callBack함수를 받는다.
  useEffect(() => {
    // 컴포넌트가 업데이트 되고 axios 실행
    axios
      .get("http://localhost:8088/board/list", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setValues(res.data);
        console.log(res.data);
        console.log("values" + values);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [values]);

  return (
    <div className="boardListDiv">
      <button onClick={userWriting}>작성</button>
      <table>
        <thead>
          <tr>
            <th scope="col">no</th>
            <th scope="col">제목</th>
            <th scope="col">내용</th>
            <th scope="col">작성자</th>
            <th scope="col">날짜</th>
          </tr>
        </thead>
        <tbody onClick={userDetailClick}>
          {Object.values(values).map((v, i) => (
            <tr key={i}>
              <td> {v.seq} </td>
              <td> {v.title} </td>
              <td> {v.content} </td>
              <td> {v.regId} </td>
              <td> {v.regDate} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default boardList;
