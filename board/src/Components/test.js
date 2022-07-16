import React, { useState, useEffect } from "react";

const Test = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("/")
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setMessage(data);
      });
  }, []);

  return (
    <div>
      Test
      <div>{data}</div>
    </div>
  );
};

export default Test;
