import { render } from "@testing-library/react-native";

import HomeScreen from "../index";

describe("HomeScreen", () => {
  it("matches snapshot", () => {
    const container = render(<HomeScreen />);

    expect(container.toJSON()).toMatchSnapshot();
  });
});
