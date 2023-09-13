import React from "react";

import { InputProps } from "../../utils/types";
import "./Input.css";

const Input = ({ id, label, type, value, placeholder, onChange }: InputProps): React.ReactElement => {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={0}
      />
    </div>
  );
};

export default Input;
