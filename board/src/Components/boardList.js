import React, { useEffect, useState } from "react";
import "./board.css";

// 게시글 목록 페이지
const boardList = () => {
  const [values, setValues] = useState({
    title: "",
    id: "",
    content: "",
    regDate: "",
  });

  // 작성 클릭시 페이지 이동
  const userWriting = () => {
    window.location.href = "/boardDetail";
  };

  // useEffect는 첫번째 인자로 callBack함수를 받습니다.
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
        <tbody>
          {values.items.map((values) => (
            <tr key={values.title}>
              <td> {values.id} </td>
              <td> {values.content} </td>
              <td> {values.regDate} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default boardList;
