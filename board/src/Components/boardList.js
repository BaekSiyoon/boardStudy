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

  // 클릭시 게시글 상세 페이지로 이동
  const userDetailClick = (seq, e) => {
   window.location.href = `/boardDetail/${seq}`; 
   console.log(`/boardDetail${seq}`);
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
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
          {Object.values(values).map((v, i) => (
            <tr key={i} value={v.seq} onClick={(e)=>{userDetailClick(v.seq, e)}}>
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
