import{test, expect} from '@playwright/test'

test ('Bearer token api', async ({request})=>{

    const response = await request.post('https://dummyjson.com/auth/login',{

        data:{
            username:"emilys",
            password:"emilyspass"
        }
    })

    const data = await response.json()
    console.log(data);

    const token= data.accessToken;
    console.log(token);

    const profileresponse= await request.get('https://dummyjson.com/auth/me',{

        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    

    const data1= await profileresponse.json()
    console.log(data1);
    
    


})