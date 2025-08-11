import Knight from "./knight.js";

describe("Knight class tests", () => {
  describe("contstructor tests", () => {
    let k = new Knight();
    test("knight default position is at 0, 0", () => {
      expect(k.position).toEqual([0, 0]);
    });
  });
  describe("Adjacency list methods", () => {
    let k = new Knight();
    test("method should return an array of arrays", () => {
      expect(k.neighbors).toBeInstanceOf(Array);
    });
  });
});
