// @ts-check
//
import Vertex from './vertex.js'

/**
 * @class Knight
 * @classdesc a knight class to move on a board
 * */
class Knight {
  /**@type {Vertex} */
  #position;
  /** @type {Array} */
  #neighbors;

  /**
   * @constructor
   * @param {number[]} [position=[0, 0]]
   * */
  constructor(position = [0, 0]) {
    this.#position = new Vertex(...position);
  }

  get position() {
    return this.#position.getPosition();
  }

  /**
   * @method to set the position of the knight
   * @param {Array} val 
   * */
  set position(val) {
    let [x, y] = val
    this.#position.setPosition(x, y)
  }

  /**
   * @method to build an adjacency list of the knight at the current position
   * */
  buildAdjacencyList() {
    let movements = [
      { x: 1, y: 2 },
      { x: 1, y: -2 },
      { x: -1, y: 2 },
      { x: -1, y: -2 },
      { x: 2, y: 1 },
      { x: 2, y: -1 },
      { x: -2, y: 1 },
      { x: -2, y: -1 },
    ];
    let viableMove = []
    let pos = this.#position;
    for (let m of movements) {
      let px = pos.x + m.x
      let py = pos.y + m.y 
      if (px >= 0
        && py >= 0
        && px <= 7
        && py <= 7) {
        viableMove.push(new Vertex(px, py))
      }
    }
    return viableMove
  }
}

export default Knight;
