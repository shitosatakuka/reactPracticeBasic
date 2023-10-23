import React from "react";

const App = () => {
  const onClickButton = () => alert();
  return (
    // JSXは必ず一つのタグで囲わないといけないので、タグで囲ってあげる。ただし、不要なタグも生成されてしまうので、<React.Fragment></React.Fragment>で囲う
    // 空のタグで囲うことでも問題なく動作する<></>
    <>
      <h1>Hello World!</h1>
      <p>おげんきですか？</p>
      {/* ボタンをつける。動作を指定するときに関数書き込む */}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// 内容を他の場所で使うにはexport　を使って出力する
export default App;
