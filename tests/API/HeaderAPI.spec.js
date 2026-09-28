import{test, expect} from '@playwright/test'

test('Header API testing', async({request})=>{

    const headerrequest= {
         'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    const response= await request.post('https://jsonplaceholder.typicode.com/users',{
        headers: headerrequest,
        data:{
            name: "updated name",
            email: "updatedemail.example.com"
        }
    })

    const data= await response.json()
    console.log(data);
    console.log(response.headers());

    expect(response.status()).toBe(201)
    expect(response.headers()['content-type']).toContain('application/json')

    
    

})