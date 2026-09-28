import {test, expect} from '@playwright/test'

test ('validate table', async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

const table = await page.locator('#productTable')

const columns = await table.locator('thead tr th')
const row = await table.locator('tbody tr')

// const matchedproduct = await row.filter({
//     hasText : 'Smartwatch'
// })
// await matchedproduct.locator('input').check()

await selectproduct(row, 'Smartphone')
await selectproduct(row, 'Laptop')
await selectproduct(row, 'Tablet')
await selectproduct(row, 'Smartwatch')
await selectproduct(row, 'Wireless Earbuds')

await page.waitForTimeout(3000)

})

async function selectproduct(row, name) {

    const matchedproduct= await row.filter({
        hasText : name
    })
    await matchedproduct.locator('input').check()
    
}