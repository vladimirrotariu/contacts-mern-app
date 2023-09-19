/* eslint-disable no-console */
import { FormEventHandler, useState } from "react";

import React from "react";
import { NewContactFormProps } from "../../../utils/types";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import "./NewContactForm.css";

const NewContactForm = ({ onAddContact, textButton }: NewContactFormProps) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");

  const nameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setEnteredName(event.currentTarget.value);
  };

  const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAge(event.currentTarget.value);
  };

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(event.currentTarget.value)
  }

  const phoneChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredPhone(event.currentTarget.value)
  }

  const submitContactHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onAddContact(enteredName, enteredAge, enteredEmail, enteredPhone);
    setEnteredAge("");
    setEnteredEmail("");
    setEnteredName("");
    setEnteredPhone("");
  };

  return (
    <section className="new-contact">
      <h2>Add a New Contact</h2>
      <form onSubmit={submitContactHandler}>
        <Input
          type="text"
          label="Name"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          placeholder="Camille"
        />
        <Input
          type="number"
          label="Age"
          id="age"
          value={enteredAge}
          onChange={ageChangeHandler}
          placeholder="19"
        />
        <Input
          type="text"
          label="Email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          placeholder="camilledegrasse@zmail.com"
        />
        <Input
          type="text"
          label="Phone"
          id="phone"
          value={enteredPhone}
          onChange={phoneChangeHandler}
          placeholder="+31094887472999"
        />
        <Button type="submit" textButton={textButton} actionOnClick={() => console.log(`Just created contact ${enteredName}`)} />
      </form>
    </section>
  );
};

export default NewContactForm;
