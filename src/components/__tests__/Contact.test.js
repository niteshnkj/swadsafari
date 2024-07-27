import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUs from "../ContactUs";

describe("Contact Us Page Test Case", () => {
  //eiter we write test or we write it both test and it are one and the same thing .
  it("Should load contact us component", () => {
    //render
    render(<ContactUs />);

    //querting
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact component", () => {
    //render
    render(<ContactUs />);

    //querying
    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside Contact component", () => {
    // render
    render(<ContactUs />);

    //querying
    const inputName = screen.getByPlaceholderText("name");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the Contact component", () => {
    // render
    render(<ContactUs />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //console.log(inputBoxes.length);

    // Assertion

    expect(inputBoxes.length).toBe(2);
  });
});
