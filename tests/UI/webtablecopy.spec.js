import {test, expect} from '@playwright/test'

test ('validate table', async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

const table = await page.locator('#productTable')
const columns = await table.locator('thead tr th')
const row = await table.locator ('tbody tr')

const selectproduct =['Smartphone', 'Laptop', 'Tablet', 'Smartwatch', 'Router', 'Soundbar']

for (const selectproducts of selectproduct)
{
    const matchedproduct = await row.filter({
        hasText : selectproducts
    })
    await matchedproduct.locator('input').check()
}

await page.waitForTimeout(10000)


})