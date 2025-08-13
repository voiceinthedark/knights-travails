import Knight from "./knight.js";

describe("Knight class tests", () => {
  describe("contstructor tests", () => {
    let k = new Knight();
    test("knight default position is at 0, 0", () => {
      expect(k.position).toEqual([0, 0]);
    });
    test("knight non-default position return correct coordinates", () => {
      let kn = new Knight([3, 3])
      expect(kn.position).toEqual([3, 3])
    })
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
  describe.skip("Adjacency list methods", () => {
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
  describe('getNeighbors method tests', () => {
    let k = new Knight([3, 3])
    test('getNeighbors returns an array', () => {
      expect(k.getNeighbors([3, 3])).toBeInstanceOf(Array)
    })
    test('getNeighbors returns correct results', () => {
      expect(k.getNeighbors([3, 3])).toHaveLength(8)
    })
    
  })
});
