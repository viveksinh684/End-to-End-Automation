import {test, expect} from '@playwright/test'

test('Basic authentication', async ({request})=>{

    const response = await request.get('https://httpbin.org/basic-auth/user/passwd',{

        headers:{
            Authorization: 'Basic '+ Buffer.from('user:passwd').toString('base64')
        }
    })

    const data= await response.json()

    expect(response.status()).toBe(200)
    expect(data.authenticated).toBe(true)



})