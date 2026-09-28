import{test, request} from '@playwright/test'

test('API call request', async()=>{

    const BURL= await request.newContext({
        baseURL: 'https://restful-booker.herokuapp.com'
    })

    const response= await BURL.get('/booking')
    const data = await response.json()
    console.log(data);
    


})