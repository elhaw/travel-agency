import { describe, it, test, expect } from "vitest";
import Heading from "../Heading";
import { render } from "@testing-library/react";
describe("Heading component", () => {
  test("Should render Heading component with level one", () => {
    const { getByRole } = render(<Heading />);
    let element = getByRole("heading", { level: 1, name: "Hello world" });
    expect(element).toBeDefined();
  });
});
