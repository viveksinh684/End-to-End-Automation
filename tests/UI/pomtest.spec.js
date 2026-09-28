import {test, expect} from '@playwright/test'
import { login } from '../../Pages/Loginpage.spec copy'

test ('loginpage', async({page})=>{

const login1 =new login(page)
await login1.loginurl()
await login1.loginmethod('pavanol', 'test@123')



})