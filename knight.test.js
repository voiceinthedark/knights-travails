import Knight from "./knight.js";

describe("Knight class tests", () => {
  describe("contstructor tests", () => {
    let k = new Knight();
    test("knight default position is at 0, 0", () => {
      expect(k.position).toEqual([0, 0]);
    });
  });
  describe('Set position tests', () => {
    let k = new Knight()
    test('original position at 0 0', () => {
      expect(k.position).toEqual([0, 0])
    })
    test('after setting the position, position changes', () => {
      k.position = [1,1]
      expect(k.position).toEqual([1, 1])
    })
    
  })
  describe("Adjacency list methods", () => {
    let k = new Knight();
    test("method should return an array of arrays", () => {
      expect(k.buildAdjacencyList()).toBeInstanceOf(Array);
    });
    test('Adjacency list should contain 2 items at pos 0', () => {
      expect(k.buildAdjacencyList()).toHaveLength(2)
    })
    test('Adjacency list should contain 8 items at 3, 3', () => {
      k.position = [3, 3]
      expect(k.buildAdjacencyList()).toHaveLength(8)
    })
  });
});
