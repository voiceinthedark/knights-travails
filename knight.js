// @ts-check

/**
 * @class Knight
 * @classdesc a knight class to move on a board
 * */
class Knight {
  /**@type {Array<number>} */
  #position;
  /** @type {Array} */
  #neighbors;

  /**
   * @constructor
   * @param {number[]} [position=[0, 0]]
   * */
  constructor(position = [0, 0]) {
    this.#position = position;
  }

  get position() {
    return this.#position;
  }

  set position(val) {
    this.#position = val;
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
  }
}

export default Knight;
