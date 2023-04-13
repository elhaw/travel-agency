import { expect, test } from "vitest";
import { addTwoNumbers } from "./index";

test("It should add two numbes", () => {
  const sum = addTwoNumbers(1, 5);
  const excpectedResult = 6;

  expect(sum).toEqual(excpectedResult); 
});
