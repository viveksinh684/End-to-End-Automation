import {test, expect} from '@playwright/test'

test ('Homepage login', async ({page})=>{

await page.goto('https://www.demoblaze.com/index.html')

expect (await page.title()).toBeTruthy()

const pagetitle = await page.title()

if (pagetitle)
{
    expect (page).toHaveTitle('STORE')
}

await page.locator('#login2').click()

const username = "pavanol"

await page.locator('#loginusername').fill(username)

await page.locator ('#loginpassword').fill('test@123')

await page.getByRole('button', { name: 'Log in' }).click()

await expect(page.locator('#nameofuser')).toHaveText('Welcome '+username)

const productlink = await page.locator('//div[@id="tbodyid"]//h4/a').all()

for (const productname of productlink)
{
    const Allproduct = await productname.textContent()
    
    console.log(Allproduct)

}


})