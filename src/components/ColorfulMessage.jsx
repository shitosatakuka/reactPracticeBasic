import react from "react";

// 引数にpropsを指定することで、propsを受け取ることができる
const ColorfulMessage = (props) => {
  console.log(props);
  const contentLadyStyle = {
    color: props.color,
    fontsize: "20px",
  };
  return <p style={contentLadyStyle}>{props.message}</p>;
};

export default ColorfulMessage;
