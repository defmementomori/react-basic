import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  console.log(num);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(!faceShowFlag);
    } else {
      faceShowFlag && setFaceShowFlag(!faceShowFlag);
    }
  }, [num]);

  const onClickonoff = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>he</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気ですか</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickonoff}> onoff</button>
      <p>{num}</p>
      {faceShowFlag && <p>aaaaa</p>}
    </>
  );
};

export default App;
