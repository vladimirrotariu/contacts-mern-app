import React from "react";
import { ButtonProps } from "../../utils/types";
import "./Button.css";

const Button = ({ type, textButton, children }: ButtonProps): React.ReactElement => {
  return (
    <button className="button" type={type}>
      {children || textButton}
    </button>
  );
};

export default Button;
