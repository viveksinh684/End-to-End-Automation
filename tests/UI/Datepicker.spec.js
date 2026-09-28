import {test, expect} from '@playwright/test'

test ('validatre datepicker', async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

const expectedmonth = 'August'
const expectedyear = '2030'

await page.locator('#datepicker').click()

while(((await page.locator('.ui-datepicker-month').textContent()) !==expectedmonth) ||
                                 ((await page.locator('.ui-datepicker-year').textContent()) !==expectedyear))
{
    await page.getByText('Next', { exact: true }).click()
}

await page.waitForTimeout(3000)


})