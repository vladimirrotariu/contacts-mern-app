import React from "react";

import { InputProps } from "../../utils/types";
import "./Input.css";

const Input = (props: InputProps): React.ReactElement => {
  return (
    <div className="input">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        min={0}
      />
    </div>
  );
};

export default Input;
