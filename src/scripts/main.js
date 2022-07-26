// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
// import { usePottery } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 2, 5)
// This ^ one is too hot!!! Hot stuff!
let mug2 = makePottery("mug2", 100, 5.2)
// This ^ is my Heavy ass mug
let mug3 = makePottery("mug3", 1.3, 2)
let mug4 = makePottery("mug4", 2.2, 1.2)
let mug5 = makePottery("mug5", 3.2, 2.22)
let mug6 = makePottery("mug6", 2.12, 8.2)

// Fire each piece of pottery in the kiln
let mugfired = firePottery(mug, 9000)
let mugfired2 = firePottery(mug2, 2100)
let mugfired3 = firePottery(mug3, 1100)
let mugfired4 = firePottery(mug4, 1000)
let mugfired5 = firePottery(mug5, 2000)
let mugfired6 = firePottery(mug6, 900)

// Determine which ones should be sold, and their price
let mugsell = toSellOrNotToSell(mugfired)
let mugsell2 = toSellOrNotToSell(mugfired2)
let mugsell3 = toSellOrNotToSell(mugfired3)
let mugsell4 = toSellOrNotToSell(mugfired4)
let mugsell5 = toSellOrNotToSell(mugfired5)
let mugsell6 = toSellOrNotToSell(mugfired6)

//Cracked mud below
console.log(mug)


// console.log(mugsell)
// console.log(mugsell2)
// console.log(mugsell3)
// console.log(mugsell4)
// console.log(mugsell5)
// console.log(mugsell6)
// Invoke the component function that renders the HTML list
const thePotteryList = PotteryList()
console.log(thePotteryList)


//QQ - Why do my tests fail?
