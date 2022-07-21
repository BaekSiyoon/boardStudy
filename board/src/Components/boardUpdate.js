import React from "react";
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
          <input
            type="text"
            name="title"
            //value={values.title}
            //onChange={handleChange}
          />
          <div> 작성자 </div>
          <input
            type="text"
            name="id"
            //value={values.id}
            //onChange={handleChange}
          />
          <div> 비밀번호 </div>
          <input
            type="text"
            name="password"
            //value={values.password}
            //onChange={handleChange}
          />
          <div> 내용 </div>
          <input
            type="text"
            name="content"
            //value={values.content}
           //onChange={handleChange}
          />
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
