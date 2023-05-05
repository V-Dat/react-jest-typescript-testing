import { screen, render, fireEvent } from "@testing-library/react";
import Counter from "../Counter";
import ReduxProvider from "../../common/ReduxProvider";

describe("Testing Counter", () => {
  test("Counter should render 0 at first time", () => {
    render(
      <ReduxProvider>
        <Counter />
      </ReduxProvider>
    );
    const countValue = screen.getByText("0");
    expect(countValue).toBeInTheDocument();
  });

  describe("Testing counter handler", () => {
    test("Press Increase", () => {
      const { getByLabelText } = render(
        <ReduxProvider>
          <Counter />
        </ReduxProvider>
      );
      const buttonIncrease = getByLabelText("Increment value");
      fireEvent.click(buttonIncrease);
      const countValue = screen.getByText("1");
      expect(countValue).toBeInTheDocument();
    });
    test("Press Decrease", () => {
      const { getByLabelText } = render(
        <ReduxProvider>
          <Counter />
        </ReduxProvider>
      );
      const buttonDecrease = getByLabelText("Decrement value");
      fireEvent.click(buttonDecrease);
      fireEvent.click(buttonDecrease);
      const countValue = screen.getByText("-1");
      expect(countValue).toBeInTheDocument();
    });
  });
});
