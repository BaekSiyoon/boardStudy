import React, { useState } from "react";
import "./board.css";

const boardDetail = () => {
  const [values, setValues] = useState({
    title: "",
    content: "",
    id: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <div className="boardDetailDiv">
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
          <div> 내용 </div>
          <input
            type="text"
            name="content"
            value={values.content}
            onChange={handleChange}
          />
          <br />
          <button type="submit">작성하기</button>
        </form>
      </div>
    </div>
  );
};

export default boardDetail;
