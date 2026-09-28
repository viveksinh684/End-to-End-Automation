import{test, expect} from '@playwright/test'

test('network intercept', async ({page})=>{

    await page.route('**/products.json', async(route)=>{

        const request= route.request()
        console.log('request url', request.url());
        console.log('request header', request.headers());
        console.log('request method',request.method() );
        console.log('Product API intercepted');

        await route.continue()
    })

    await page.goto('https://react-shopping-cart-67954.firebaseapp.com/')
    await page.waitForTimeout(3000)
})