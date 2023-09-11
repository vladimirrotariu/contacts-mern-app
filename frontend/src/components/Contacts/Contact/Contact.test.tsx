import { render, screen } from "@testing-library/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import Contact from "./Contact";

describe("Given a Contact component", () => {
  const nameSarah = "Sarah";
  const ageSarah = 30;
  const emailSarah = "sarahknauss@gmail.es";
  const phoneSarah = "+3492040200";

  describe("When given a contact whose name is 'Sarah'", () => {
    test("Then it should show the name 'Sarah'", () => {
      render(<Contact name={nameSarah} age={ageSarah} email={emailSarah} phone={phoneSarah} />);

      const nameSarahElement = screen.getByText("Sarah");

      expect(nameSarahElement).toBeInTheDocument();
    })
  })

  describe("When given a contact whose age is 30", () => {
    test("Then it should show the age of the contact as '30'", () => {
      render(<Contact name={nameSarah} age={ageSarah} email={emailSarah} phone={phoneSarah} />);

      const ageSarahElement = screen.getByText("Age: 30 years");

      expect(ageSarahElement).toBeInTheDocument();
    })
  })

  describe("When given a contact whose email is 'sarahknauss@gmail.es'", () => {
    test("Then it should show the email of the contact as 'sarahknauss@gmail.es'", () => {
      render(<Contact name={nameSarah} age={ageSarah} email={emailSarah} phone={phoneSarah} />);

      const emailSarahElement = screen.getByText("Email: sarahknauss@gmail.es");

      expect(emailSarahElement).toBeInTheDocument();
    })
  })

  describe("When given a contact whose phone is '+3492040200'", () => {
    test("Then it should show the phone of the contact as '+3492040200'", () => {
      render(<Contact name={nameSarah} age={ageSarah} email={emailSarah} phone={phoneSarah} />);

      const phoneSarahElement = screen.getByText("Phone: +3492040200");

      expect(phoneSarahElement).toBeInTheDocument();
    })
  })
})
