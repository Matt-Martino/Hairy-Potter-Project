// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 2, 5)
let mugfired = firePottery(mug, 9000)
console.log(mugfired)
// This ^ one is too hot!!! Hot stuff!

let mug2 = makePottery("mug2", 22, 5.2)
let mugfired2 = firePottery(mug2, 2100)
console.log(mugfired2)

let mug3 = makePottery("mug3", 1.3, 2)
let mugfired3 = firePottery(mug3, 1100)
console.log(mugfired3)

let mug4 = makePottery("mug4", 2.2, 1.2)
let mugfired4 = firePottery(mug4, 1000)
console.log(mugfired4)

let mug5 = makePottery("mug5", 3.2, 2.22)
let mugfired5 = firePottery(mug5, 2000)
console.log(mugfired5)

let mug6 = makePottery("mug6", 2.12, 8.2)
let mugfired6 = firePottery(mug6, 900)
console.log(mugfired6)


// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



