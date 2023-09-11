import { render, screen } from "@testing-library/react"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react"
import Header from "./Header"

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("Then it should contain a heading with the text 'My Contacts List'", () => {
      render(<Header />);

      const headerElement = screen.getByText("My Contacts List");

      expect(headerElement).toBeInTheDocument();
    })
  })
})
