import { render } from "@testing-library/react-native";
import { ErrorMessage } from "./ErrorMessage";

describe("ErrorMessage", () => {
  describe("Given no message", () => {
    it("should return null", () => {
      const container = render(<ErrorMessage message="" />);

      expect(container.toJSON()).toBeNull();
    });
  });

  describe("Given message", () => {
    it("should show message", () => {
      const { getByText } = render(
        <ErrorMessage message="This is an error!" />
      );

      expect(getByText("This is an error!")).toBeTruthy();
    });
  });
});
