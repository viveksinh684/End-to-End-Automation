// import {test as base} from '@playwright/test'
// import { LoginPage } from '../POMpages/LoginPage'
// import user from '../test-data/userData.json'



// export const test=base.extend({

// loginpage: async ({page},use)=>{
//     const login =new LoginPage(page)
//     await login.navigation('https://demoblaze.com/index.html')
//     await login.loginmethod(user.user,user.pass)
//     await use(page)
// }



// })

// fixtures/loginFixture.js

import { test as base } from '@playwright/test'
import { LoginPage } from '../POMpages/LoginPage'
import { AddToCartPage } from '../POMpages/AddToCartPage'
import user from '../test-data/userData.json'

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const login = new LoginPage(page)

    await login.navigation('https://demoblaze.com/index.html')
    await login.loginmethod(user.user, user.pass)

    await use(login)
  },

  cart : async ({page}, use)=>{
    const cart=new AddToCartPage(page)
  
    await use(cart)
  }


})