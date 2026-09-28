import{test, expect} from '@playwright/test'

test('post API', async ({request})=>{

    const response = await request.post('https://jsonplaceholder.typicode.com/users',{
        data:{
            name:"update name",
            email:"updatedemail.example.com"
        }
    })

    const data = await response.json()
    console.log(data);
    expect(response.status()).toBe(201)
    expect(data.id ).toBeDefined()
    expect(typeof data.id).toBe('number')
    expect(data.name).toBeDefined()
    expect(data.email).toBeDefined()
    expect(data.name).toBe('update name')
    


})