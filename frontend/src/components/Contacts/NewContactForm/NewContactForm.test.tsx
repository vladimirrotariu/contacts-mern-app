import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

import { vi } from "vitest";

import NewContactForm from "./NewContactForm";

describe("Given a NewContactForm component", () => {
  const textButton = "SUBMIT";
  describe("When given the text 'SUBMIT' for its button", () => {
    test("Then it shows a button with the text 'SUBMIT'", () => {
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

  describe("When it receives a function and the user clicks the form's button", () => {
    test("Then it should call that function", async () => {
      const mockFunction = vi.fn();
      render(<NewContactForm textButton={textButton} onAddContact={mockFunction} />);

      const buttonElement = screen.getByRole("button", { name: textButton });
      await userEvent.click(buttonElement);

      expect(mockFunction).toHaveBeenCalled();
    })
  })
})

