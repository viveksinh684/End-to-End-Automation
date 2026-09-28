import{test, expect} from '@playwright/test'
import user from '../../test-data/APIdata.json'


test('Post call API testing', async({request})=>{

    const response= await request.post('https://restful-booker.herokuapp.com/booking',{
        data:user
    })

    const data= await response.json()
    console.log(data);
    


})