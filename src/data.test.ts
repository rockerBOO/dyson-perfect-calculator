import { calculateRequirements, dspCrafts, dspItems } from "./data";

test("calculations", () => {
  expect(dspItems).toBe("red");
});

test("crafts", () => {
  // want to make 1 strange matter per second

  expect(calculateRequirements([1, 1204])).toBe("red");
});
