import { test } from "../../fixtures/Loginfixture";
import user from '../../test-data/userData.json'


test('E2E', async ({page, loginPage,cart})=>{

    await cart.addtocart(user.productname)

    await page.waitForTimeout(5000)
})