import react from "react";

// 引数にpropsを指定することで、propsを受け取ることができる
const ColorfulMessage = (props) => {
  //   分割代入をすることでpropsをまとめることができる。
  const { color, children } = props;
  console.log(props);
  const contentLadyStyle = {
    color: color,
    fontsize: "20px",
  };
  return <p style={contentLadyStyle}>{children}</p>;
};

export default ColorfulMessage;
