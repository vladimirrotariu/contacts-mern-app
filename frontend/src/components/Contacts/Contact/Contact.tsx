import React from "react";
import { deleteContact } from "../../../utils/actions";
import { ContactProps } from "../../../utils/types";
import Button from "../../Button/Button";
import "./Contact.css";

const Contact = ({ name, age, email, phone }: ContactProps): React.ReactElement => {
  return (
    <li className="contact-item">
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <Button type="button" textButton="DELETE" actionOnClick={() => deleteContact(phone)} />
    </li>
  );
};

export default Contact;
