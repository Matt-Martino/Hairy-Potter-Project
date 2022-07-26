/*
Create Pottery HTML
Create a scripts/PotteryList.js module.
Define and export a PotteryList function.
The PotteryList function must get the items to be sold from the PotteryCatalog.js module.
The PotteryList function must convert each object in the array to an HTML representation string. Use the following template to generate the representations.
<section class="pottery" id="pottery--1">
  <h2 class="pottery__shape">Mug</h2>
  <div class="pottery__properties">
    Item weighs 3 grams and is 6 cm in height
  </div>
  <div class="pottery__price">Price is $20</div>
</section>
The PotteryList function must then return a single string that contains ALL of the pottery HTML representation.
*/

import { usePottery } from "./PotteryCatalog.js"

/*
1st.  define and export a function called PotteryList.
2nd.  PotteryList must gather the items to be sold from the potteryCatalog.js madule.
3rd.  Import the function that exports the pottery catalog.
4th.  the pottery list function must convert each object in the array to an HTML representation string.
5th.  use the template on the webpage and listed above.
6th.  PotteryList must return a SINGLE STING of all the shit!

*/

export const PotteryList = () => {
    const useableGoods = usePottery()
    let htmlString = ``
    for (const useableGood of useableGoods){
        htmlString += 
        `<section class="pottery" id="pottery--1">
        <h2 class="pottery__shape">${useableGood.shape}</h2>
        <div class="pottery__properties">
          Item weighs ${useableGood.weight} and is ${useableGood.height} cm in height
        </div>
        <div class="pottery__price">Price is ${useableGood.price}</div>
      </section>`
    }
    return htmlString
}