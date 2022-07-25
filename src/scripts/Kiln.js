/*
   Firing the Pottery in the Kiln
Define a scripts/Kiln.js module.
Define and export a function named firePottery that is responsible for acting as a kiln.
The function must accept the following values as input (i.e. it needs parameters), in the following order. If you don't remember, you can easily add new properties to objects in JavaScript.
An object representing a piece of pottery that was made at the wheel in the makePottery function.
A number specifying the firing tempFired of the kiln.
The function must add a new property of fired with the value of true to the object.
The function must add a new property of cracked to the object.
If the temperature of the kiln is above 2200 degrees then cracked property must have a value of true.
If the temperature of the kiln is at, or below, 2200 degrees then cracked property must have a value of false.
After both of the new properties have been added, return the augmented object.
*/



/*
1st.  Define and export a function called firePottery.  
2nd.  firePottery must accept the object made in makePottery, AND the temprature fired at ( tempFired )
            2 parameters!!
3rd.  firePottery must add a new property to makePottery object.  fired: true,
4th.  firePottery must add a new property to makePottery object
         if tempFired > 2200 than cracked = true
         if tempFired <= 2200 than cracked = false
5th.  return the augmented object = makePottery object.

*/
// This function takes the object created by the function "makePottery" and adds fired values to it, along with the temprature fired at 
// values that were used as arguments.

export const firePottery = (potteryObject, tempFired) => {
    potteryObject.fired = true
    if (tempFired > 2200) {
       potteryObject.cracked = true
 }
 else {
       potteryObject.cracked = false
 }
 return potteryObject
 }