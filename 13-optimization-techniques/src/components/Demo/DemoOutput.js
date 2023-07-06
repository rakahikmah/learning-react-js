import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  return <MyParagraph>{props.show ? "This is now" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);
