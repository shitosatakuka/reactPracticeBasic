import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    // setNum()に10000と入れれば、ボタンを押した後に10000に変更される。
    // setNum(10000);
    setNum(num + 1);
  };
  // cssのスタイルを関数として充てることもできる。書く時は必ずキャメルケースで。 font-sizeではなく、fontSize
  // stateの使い方。const[引き数名、関数名]のような形で書く。useState()の中は初期値になる。
  const [num, setNum] = useState(0);
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
      {/* ↓props.childrenを使った書き方 */}
      <ColorfulMessage color="pink">げんきです？</ColorfulMessage>
      {/* ↓contentStyleという関数を作って直接各方法 */}
      <p style={contentStyle}>おげんきですか？</p>
      {/* ↓コンポーネント化してprops名をつける。これでコンポーネントに情報を渡せる */}
      {/* ↓propsで指定する書き方 */}
      <ColorfulMessage color="blue" message="お元気ですか？" />
      {/* ボタンをつける。動作を指定するときに関数書き込む */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

// 内容を他の場所で使うにはexport　を使って出力する
export default App;
