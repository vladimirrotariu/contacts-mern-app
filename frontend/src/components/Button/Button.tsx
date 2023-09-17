import React from "react";
import { ButtonProps } from "../../utils/types";
import "./Button.css";

const Button = ({ type, textButton, actionOnClick, children }: ButtonProps): React.ReactElement => {
  return (
    <button className="button" type={type} onClick={actionOnClick}>
      {children || textButton}
    </button>
  );
};

export default Button;
