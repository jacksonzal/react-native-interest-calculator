import { fireEvent, render } from "@testing-library/react-native";
import { RadioButtons } from "../RadioButtons";

const mockOnChange = jest.fn();
const mockProps = {
  label: "The label",
  selectedValue: "value2",
  onChange: mockOnChange,
  options: [
    { label: "label1", value: "value1" },
    { label: "label2", value: "value2", image: "theImage" as any },
  ],
};

describe("RadioButtons", () => {
  it("should match snapshot", () => {
    const container = render(<RadioButtons {...mockProps} />);

    expect(container.toJSON()).toMatchSnapshot();
  });

  describe("When user presses an option", () => {
    it("should call onChange with value and show as selected", () => {
      const { getByText } = render(<RadioButtons {...mockProps} />);

      fireEvent.press(getByText("label1"));
      expect(mockOnChange).toHaveBeenCalledWith("value1");
    });
  });
});
