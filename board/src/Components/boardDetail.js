import React, { useEffect, useState } from "react";
import axios from "axios";
import "./board.css";

// 게시글 상세 페이지
const boardDetail = ({match}) => {
  console.log(match);
  
  const [detailValues, setDetailValues] = useState({
    seq: "",
    title: "",
    id: "",
    content: "",
    regDate: "",
  });

  useEffect(() => {
    axios
      .post(`http://localhost:8088/board/detailList/${match.params.seq}`, match.params.seq, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setDetailValues(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // 게시글 목록 페이지로 이동
  const boardListPage = () => {
    window.location.href = "/boardList";
  }

  // 게시글 수정 페이지로 이동
  const boardUpdatePage = () => {
    console.log("수정 페이지 클릭");
    window.location.href = `/boardUpdate/${match.params.seq}`;
  }

  return (
    <div className="boardDetailDiv">
      <h1>상세페이지 {match.params.seq}</h1>
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
        {Object.values(detailValues).map((v, i) => (
          <tr key={i} value={v.seq} >
             <td> {v.seq} </td>
            <td> {v.title} </td>
            <td> {v.content} </td>
            <td> {v.regId} </td>
            <td> {v.regDate} </td>
          </tr>
        ))}
      </tbody>
      </table>
        <button onClick={boardListPage}>
            목록
        </button>
        <button onClick={boardUpdatePage}>
            수정
        </button>
    </div>
  );
};

export default boardDetail;
