// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { usePottery } from "./PotteryCatalog.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 2, 5)
let mugfired = firePottery(mug, 9000)
let mugsell = toSellOrNotToSell(mugfired)
console.log(mugsell)

// This ^ one is too hot!!! Hot stuff!

let mug2 = makePottery("mug2", 22, 5.2)
let mugfired2 = firePottery(mug2, 2100)
let mugsell2 = toSellOrNotToSell(mugfired2)
console.log(mugsell2)

let mug3 = makePottery("mug3", 1.3, 2)
let mugfired3 = firePottery(mug3, 1100)
let mugsell3 = toSellOrNotToSell(mugfired3)
console.log(mugsell3)

let mug4 = makePottery("mug4", 2.2, 1.2)
let mugfired4 = firePottery(mug4, 1000)
let mugsell4 = toSellOrNotToSell(mugfired4)
console.log(mugsell4)

let mug5 = makePottery("mug5", 3.2, 2.22)
let mugfired5 = firePottery(mug5, 2000)
let mugsell5 = toSellOrNotToSell(mugfired5)
console.log(mugsell5)

let mug6 = makePottery("mug6", 2.12, 8.2)
let mugfired6 = firePottery(mug6, 900)
let mugsell6 = toSellOrNotToSell(mugfired6)
console.log(mugsell6)

console.log(usePottery)


// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



