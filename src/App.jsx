import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  // cssのスタイルを関数として充てることもできる。書く時は必ずキャメルケースで。 font-sizeではなく、fontSize
  const contentStyle = {
    color: "blue",
    fontSize: "18px",
  };

  return (
    // JSXは必ず一つのタグで囲わないといけないので、タグで囲ってあげる。ただし、不要なタグも生成されてしまうので、<React.Fragment></React.Fragment>で囲う
    // 空のタグで囲うことでも問題なく動作する<></>
    <>
      {/* スタイルを当てるときに直接書くことができる。{{''}}の形で書く */}
      <h1 style={{ color: "red" }}>Hello World!</h1>
      <p style={contentStyle}>おげんきですか？</p>
      <ColorfulMessage />
      {/* ボタンをつける。動作を指定するときに関数書き込む */}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// 内容を他の場所で使うにはexport　を使って出力する
export default App;
