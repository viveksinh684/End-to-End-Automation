import {test, expect} from '@playwright/test'

test ('end to end testing', async ({page})=>{

await page.goto('https://www.demoblaze.com/index.html')
await page.getByRole('link', { name: 'Log in' }).click()
await page.locator('#loginusername').fill('pavanol')
await page.locator('#loginpassword').fill('test@123')
await page.getByRole('button', { name: 'Log in' }).click()

await page.locator('.hrefch').first().waitFor()

const allproduct = await page.locator('.hrefch').all()
//console.log(allproduct)

for (const product of allproduct)
{
    const keyproduct = await product.textContent()
    if(keyproduct === 'Nexus 6')
    {
        await product.click()
        break
    }
}

await page.getByRole('link', { name: 'Add to cart' }).click()

page.on('dialog', dialog => dialog.accept())

await page.getByText('Cart', { exact: true }).click()

await page.locator('#tbodyid tr td:nth-child(2)').first().waitFor()

const addedproduct = await page.locator('#tbodyid tr td:nth-child(2)').all()
// console.log(addedproduct)

let productfound = false;

for(const prd of addedproduct)
{
    const nameproduct = await prd.textContent()
    if(nameproduct ==='Nexus 6')
    {
        productfound= true
        break
    }


}
expect(productfound).toBeTruthy()

await page.getByRole('button', { name: 'Place Order' }).click()

await page.locator('#name').fill('test')
await page.getByRole('textbox', { name: 'Country:' }).fill('testing')
await page.getByRole('textbox', { name: 'City:' }).fill('testing')
await page.getByRole('textbox', { name: 'Credit card:' }).fill('9876543210')
await page.getByRole('textbox', { name: 'Month:' }).fill('August')
await page.getByRole('textbox', { name: 'Year:' }).fill('2026')
await page.getByRole('button', { name: 'Purchase' }).click()


page.on('dialog', async dialog=>dialog.accept())

await page.waitForTimeout(5000)




})