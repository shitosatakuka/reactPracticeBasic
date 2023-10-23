import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// const App = () => {
//   return (
//     // JSXは必ず一つのタグで囲わないといけないので、タグで囲ってあげる。ただし、不要なタグも生成されてしまうので、<React.Fragment></React.Fragment>で囲う
//     // 空のタグで囲うことでも問題なく動作する<></>
//     <React.Fragment>
//       <h1>Hello World!</h1>
//       <p>おげんきですか？</p>
//     </React.Fragment>
//   );
// };

ReactDom.render(<App />, document.getElementById("root"));
