// import { test as base } from './Loginfixture'
// import { AddToCartPage } from '../POMpages/AddToCartPage'


// export const test = base.extend({

//     cartpage: async ({page},use)=>{
//         const cart= new AddToCartPage(page)
//         await use(cart)
//     }



// })

// fixtures/addtocartFixture.js

import { test as base } from './Loginfixture'  // ✅ EXTENDING login
import { AddToCartPage } from '../POMpages/AddToCartPage'
import user from '../test-data/userData.json'

export const test = base.extend({
  cartPage: async ({ cartPage }, use) => {
    const cart = new AddToCartPage(cartPage)

    // optional: directly use product
    await cart.addtocart(user.productname)

    await use(cart)
  }
})