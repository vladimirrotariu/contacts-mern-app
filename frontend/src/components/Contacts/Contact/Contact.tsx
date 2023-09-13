import React from "react";
import { ContactProps } from "../../../utils/types";
import "./Contact.css";

const Contact = ({ name, age, email, phone }: ContactProps): React.ReactElement => {
  return (
    <li className="contact-item">
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </li>
  );
};

export default Contact;
