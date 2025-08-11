import Vertex from "./vertex.js";

describe('Vertex module tests', () => {
  describe('constructor tests', () => {
    let v = new Vertex();
    test('Default init returns default properties', () => {
      expect(v.getPosition()).toEqual([0, 0])
      expect(v.visited).toBeFalsy()
    })
  })
  describe('getPosition method', () => {
    let v = new Vertex()
    test('get position returns an array', () => {
      expect(v.getPosition()).toBeInstanceOf(Array)
    })
    test('getPosition returns the correct values', () => {
      expect(v.getPosition()).toContain(0)
    })
  })

  describe('set Position method', () => {
    let v = new Vertex();
    test('init value are correct', () => {
      expect(v.getPosition()).toContain(0)
    })
    test('position change on set position method', () => {
      v.setPosition(3, 1)
      expect(v.getPosition()).toContain(3)
      expect(v.getPosition()).toContain(1)
      expect(v.getPosition()).not.toContain(0)
    })
    
  })
  
})
