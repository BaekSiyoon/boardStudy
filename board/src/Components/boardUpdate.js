import React from "react";
import "./board.css";

// 게시글 수정 페이지
const boardUpdate = () => {
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
          <button>
            목록
          </button>
      </div>
    </div>
  );
};

export default boardUpdate;
