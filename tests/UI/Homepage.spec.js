import {test, expect} from '@playwright/test'

test ('Homepage test', async ({page})=>{

await page.goto ('https://www.demoblaze.com/index.html');

expect(await page.title()).toBeTruthy();

const pagetitle = await page.title()
console.log('page title is',pagetitle)

await expect(page).toHaveTitle('STORE');







})