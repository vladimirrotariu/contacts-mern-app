import { render, screen } from "@testing-library/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import Contact from "./Contact";

describe("Given a Contact component", () => {
  describe("When given a contact whose name is 'Sarah'", () => {
    test("Then it should show the name 'Sarah'", () => {
      const nameSarah = "Sarah";
      const ageSarah = 0;
      const emailSarah = "";
      const phoneSarah = "";

      /*const contactSarah = {
        name,
        age,
        email,
        phone
      }*/

      render(<Contact name={nameSarah} age={ageSarah} email={emailSarah} phone={phoneSarah} />);

      const nameSarahElement = screen.getByText("Sarah");

      expect(nameSarahElement).toBeInTheDocument();
    })
  })
})
