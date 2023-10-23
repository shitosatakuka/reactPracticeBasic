import React from "react";

const App = () => {
  return (
    // JSXは必ず一つのタグで囲わないといけないので、タグで囲ってあげる。ただし、不要なタグも生成されてしまうので、<React.Fragment></React.Fragment>で囲う
    // 空のタグで囲うことでも問題なく動作する<></>
    <>
      <h1>Hello World!</h1>
      <p>おげんきですか？</p>
    </>
  );
};

// 内容を他の場所で使うにはexport　を使って出力する
export default App;
