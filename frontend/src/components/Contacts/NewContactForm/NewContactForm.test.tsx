import { render, screen } from "@testing-library/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { vi } from "vitest";
import NewContactForm from "./NewContactForm";

describe("Given a NewContactForm component", () => {
  describe("When given the text 'SUBMIT' for its button", () => {
    test("Then it shows a button with the text 'SUBMIT'", () => {
      const textButton = "SUBMIT";
      const onAddContact = vi.fn();

      render(<NewContactForm textButton={textButton} onAddContact={onAddContact} />);

      const nameLabelElement = screen.getByLabelText("Name");
      const ageLabelElement = screen.getByLabelText("Age");
      const emailLabelElement = screen.getByLabelText("Email");
      const phoneLabelElement = screen.getByLabelText("Phone");

      expect(nameLabelElement).toBeInTheDocument();
      expect(ageLabelElement).toBeInTheDocument();
      expect(emailLabelElement).toBeInTheDocument();
      expect(phoneLabelElement).toBeInTheDocument();

    })
  })
})
