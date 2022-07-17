import React from "react";
import "./board.css";

// 게시글 목록 페이지
const boardList = () => {
  const userWriting = () => {
    window.location.href = "/boardDetail";
  };

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
          <tr>
            <th scope="row">1</th>
            <td>data</td>
            <td>data</td>
            <td>data</td>
            <td>data</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default boardList;
