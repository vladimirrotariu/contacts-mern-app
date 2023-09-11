import React from "react";
import { ContactProps } from "../../../utils/types";
import "./Contact.css";

const Contact = (props: ContactProps): React.ReactElement => {
  return (
    <li className="contact-item">
      <h2>{props.name}</h2>
      <p>Age: {props.age} years</p>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </li>
  );
};

export default Contact;
