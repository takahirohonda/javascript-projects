import { render } from "@testing-library/react";
import { Spinner } from "./Spinner";

describe("<Spinner />", () => {
  it("shoud have div", () => {
    const { getByTestId } = render(<Spinner />);
    expect(getByTestId("hello")).toBeInTheDocument();
  });
});
