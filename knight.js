// @ts-check
import Vertex from './vertex.js'

/**
 * @class Knight
 * @classdesc a knight class to move on a board
 * */
class Knight {
  /**@type {Vertex} */
  #position;

  /**
   * @constructor
   * @param {number[]} [position=[0, 0]]
   * */
  constructor(position = [0, 0]) {
    let [x, y] = position
    this.#position = new Vertex(x, y);
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
   * @method to get the neighbors of the coordinates
   * @param {Array<number>} position 
   * @returns {Array<Vertex>}
   * */
  getNeighbors(position) {
    return this.buildAdjacencyList(new Vertex(...position))
  }

  /**
   * @method to build an adjacency list of the knight at the current position
   * @param {Vertex} position 
   * @returns {Array<Vertex>}
   * */
  buildAdjacencyList(position) {
    let movements = [{
      x: 1,
      y: 2
    },
    {
      x: 1,
      y: -2
    },
    {
      x: -1,
      y: 2
    },
    {
      x: -1,
      y: -2
    },
    {
      x: 2,
      y: 1
    },
    {
      x: 2,
      y: -1
    },
    {
      x: -2,
      y: 1
    },
    {
      x: -2,
      y: -1
    },
    ];
    let viableMove = []
    let pos = position
    for (let m of movements) {
      let px = pos.x + m.x
      let py = pos.y + m.y
      if (px >= 0 &&
        py >= 0 &&
        px <= 7 &&
        py <= 7) {
        viableMove.push(new Vertex(px, py))
      }
    }
    return viableMove
  }

  /**
   * @method to move the knight from one vertex to another on the board
   * @param {Array<number>} from 
   * @param {Array<number>} to 
   **/
  move(from, to) {
    let q = [] // The queue
    let distance = {} // the distance array
    let parent = {} // Parent array to reconstruct a path
    let visitedCoords = new Set(); // To track visited coordinates as strings

    const fromKey = from.join(','); // Use string key for 'from'
    const toKey = to.join(',');     // Use string key for 'to'

    q.push(fromKey); // Add source (as string key) to the queue
    visitedCoords.add(fromKey); // Mark as visited
    parent[fromKey] = null;
    distance[fromKey] = 0;

    while (q.length > 0) { // Correct loop condition
      let currentCoordKey = q.shift(); // Get string key
      let [currX, currY] = currentCoordKey.split(',').map(Number);

      // console.log(`node: [${currX},${currY}] - visited: ${visitedCoords.has(currentCoordKey)}`);

      if (currX === to[0] && currY === to[1]) {
        // target reached, reconstruct path
        // console.log('reached location');
        return this.reconstructPath(parent, fromKey, toKey); // Pass string keys
      }

      /**@type {Array<Vertex>} */
      let neighbors = this.getNeighbors([currX, currY]);

      for (let i = 0; i < neighbors.length; i++) {
        const neighborCoordKey = [neighbors[i].x, neighbors[i].y].join(','); // Create string key for neighbor

        // visit each neighbor and construct a path
        if (!visitedCoords.has(neighborCoordKey)) { // Check visited status using the string key
          visitedCoords.add(neighborCoordKey); // Mark as visited
          q.push(neighborCoordKey);
          parent[neighborCoordKey] = currentCoordKey; // Store parent using string keys
          distance[neighborCoordKey] = distance[currentCoordKey] + 1; // Correct distance update
        }
      }
    }
    return null;

  }
  /**
     * @method to reconstruct the shortest path
     * @param {object} parent
     * @param {string} fromKey  - changed to string key
     * @param {string} toKey    - changed to string key
     * @returns {Array<Array<number>>}
     * */
  reconstructPath(parent, fromKey, toKey) {
    const path = []
    let currentKey = toKey
    while (currentKey != null) {
      path.unshift(currentKey.split(',').map(Number)) // Convert string key back to array
      currentKey = parent[currentKey]
    }
    return path
  }

}

/**@module Knight */
export default Knight;
