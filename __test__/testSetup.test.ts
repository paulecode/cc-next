import { test, expect } from "vitest";

function sum(a, b) {
  return a + b;
}

test("Sample Page", () => {
  expect(sum(1, 2)).toBe(3);
});
