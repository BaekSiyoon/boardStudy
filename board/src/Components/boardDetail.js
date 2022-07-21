import React from "react";
import "./board.css";

// 게시글 상세 페이지
const boardDetail = ({match}) => {
  console.log(match);
  return (
    <div>
      <h1>boardDetail {match.params.seq}</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">no</th>
            <th scope="col">제목</th>
            <th scope="col">작성자</th>
            <th scope="col">날짜</th>
          </tr>
            <td>1 </td>
            <td>제목 data</td>    
            <td>작성자 data</td>    
            <td>날짜 data</td>    
          <tr>
          <th colspan='4'>내용</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td colspan='4'>내용</td>
            </tr>
        </tbody>
        </table>
    </div>
  );
};

export default boardDetail;
