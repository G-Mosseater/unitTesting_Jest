import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<Greeting/>", () => {
  test("renders greeting", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //... nothing here

    //Assert
    const helloElement = screen.getByText("Hello", { exact: true });
    expect(helloElement).toBeInTheDocument();
  });
  test("renders good to see you if button is not clicked", () => {
    render(<Greeting />);

    const notChanged = screen.getByText("good to see you", { exact: false });
    expect(notChanged).toBeInTheDocument();
  });

  test("renders changed if button was clicked", () => {
    //Arrange

    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const outputElement = screen.getByText("Changed", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render good to see you if button was clicked", () => {
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});

//Arange  - set up the test data
//Act - run logic that should be tested
//Assert - compare execution results with expected results
