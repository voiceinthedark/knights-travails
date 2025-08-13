import Knight from "./knight.js";
import Vertex from "./vertex.js";

let k = new Knight();
let arr = k.move([0,2], [7,3])
if(arr.length > 0){
  console.log(`Path found and reached in ${arr.length - 1} moves`)
  console.log('The shortest path:')
  for(let a of arr){
    console.log(a)
  }
} else{
  console.log('No path found')
}
