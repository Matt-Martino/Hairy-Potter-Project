/*
  Making Pottery at the Wheel
Create a scripts/PotteryWheel.js module.

Define a variable in the module to have the value of the primary key for each piece of pottery. 
    It should have an initial value of 1.
 -A way to track the ID of the items in the object array.  
 -Need to add 1 to it after each run. += maybe?
 -varID

Define and export a function named makePottery.
-makePottery is the function name.
The makePottery function must accept the following values as input 
(i.e. it needs parameters), in the following order.

Shape of the piece of pottery (e.g. "Mug", "Platter") = shapeString -1st parameter

Weight of the piece (e.g. 1, 5) = weightInteger - 2nd parameter

Height of the piece (e.g. 3, 7) = heightInteger - 3rd parameter

The makePottery function must return an object with the following properties on it.
shape
weight
height
id (increment this value each time the function is invoked)
*/

/*  TO DO LIST...
1st. set a varaible to have a primary key, needs to be changable in the function.  (let!)
2nd. define the  "  makePottery  "  function to return an object.
3rd. set parameters for makePottery in THIS order (shapeSting, weightInteger, heightInteger)
4th. set the function to return (1-shape, 2-weight, 3-height, 4-id)
5th  check it!
6th  make 5 pottery pieces
*/

let potteryCounter = 1

export const makePottery = (shapeString, weightInteger, heightInteger) => {
    const potteryObject = {
        shape: shapeString,
        weight: weightInteger,
        height: heightInteger,
        id: potteryCounter++
    }
    return potteryObject
    //Check back and see where it is I need to store this?
}