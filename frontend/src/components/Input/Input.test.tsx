import { render, screen } from "@testing-library/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { vi } from "vitest";
import Input from "./Input";

describe("Given an Input component of type number", () => {
  describe("When given the label 'Age'", () => {
    test("Then it should have an element with id 'age' labelled with 'Age'", () => {
      const type = "number";
      const label = "Age";
      const id = "age";
      const value = "25";
      const placeholder = "19"
      const onChange = vi.fn();

      render(<Input type={type} label={label} id={id} value={value} onChange={onChange} placeholder={placeholder} />);

      const labelElement = screen.getByLabelText("Age");
      const labeledElement = screen.getByPlaceholderText("19");

      expect(labelElement).toBeInTheDocument();
      expect(labeledElement).toBeInTheDocument();
    })
  })
})
