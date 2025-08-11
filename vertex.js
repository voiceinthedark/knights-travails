// @ts-check

/**
 * @class Vertex
 * @classdesc a class to hold the values of a single Vertex
 * */
class Vertex{
  #x
  #y
  #visited

  /**
   * @constructor
   * @param {number} [x = 0] 
   * @param {number} [y=0] 
   * @param {boolean} [visited=false] 
   * */
  constructor(x = 0, y = 0, visited = false){
    this.#x = x;
    this.#y = y;
    this.#visited = visited;
  }

  get x(){
    return this.#x
  }

  get y(){
    return this.#y
  }

  /**
   * @method getter for the visited property
   * @returns {boolean}
   * */
  get visited(){
    return this.#visited
  }

  /**
   * @method to set visited property
   * @param {boolean} val 
   * */
  set visited(val){
    this.#visited = val
  }

  /**
   * @method to return the position of the vertex
   * @returns {Array}
   * */
  getPosition(){
    return [this.#x, this.#y]
  }

  /**
   * @method to set the position of the vertex
   * @param {number} y 
   * @param {number} x 
   * */
  setPosition(x, y){
    this.#x = x
    this.#y = y
  }
}

export default Vertex;
