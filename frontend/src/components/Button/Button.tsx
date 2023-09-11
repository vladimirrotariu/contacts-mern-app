import React from "react";
import { ButtonProps } from "../../utils/types";
import "./Button.css";

const Button = (props: ButtonProps): React.ReactElement => {
  return (
    <button className="button" type={props.type}>
      {props.children || props.textButton}
    </button>
  );
};

export default Button;
