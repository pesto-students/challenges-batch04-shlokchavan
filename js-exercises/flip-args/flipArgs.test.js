import { flipped } from "./flipArgs";

describe("Flip all provided arguements", () => {
  test("should be flipped exact reverse when read backwards", () => {
    expect.arrayContaining([]);
    expect(flipped("a", "b", "c")).toEqual(
      expect.arrayContaining(["c", "b", "a"])
    );
    expect(flipped("q", "w", "e", "r", "t", "y")).toEqual(
      expect.arrayContaining(["y", "t", "r", "e", "w", "q"])
    );
    expect(flipped("1", "2", "3", "4", "5")).toEqual(
      expect.arrayContaining(["5", "4", "3", "2", "1"])
    );
    expect(flipped(1, 2, 3, 4, 5)).toEqual(
      expect.arrayContaining([5, 4, 3, 2, 1])
    );
  });
});
