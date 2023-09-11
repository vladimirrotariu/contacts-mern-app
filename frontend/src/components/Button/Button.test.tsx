import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When given the text 'SUBMIT'", () => {
    test("Then it should show a button with the text 'SUBMIT'", () => {
      const textButton = "SUBMIT";
      const typeButton = "submit";

      render(<Button type={typeButton} textButton={textButton} />);

      const buttonWithSUBMITText = screen.getByRole("button", { name: textButton });

      expect(buttonWithSUBMITText).toBeInTheDocument();
    })
  })
})
