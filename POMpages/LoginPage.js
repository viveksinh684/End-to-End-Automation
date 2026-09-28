import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{

    constructor(page){
        super(page)

        this.loginlink=page.getByRole('link', { name: 'Log in' })
        this.userlink=page.locator('#loginusername')
        this.passwordlink=page.locator('#loginpassword')
        this.loginbutn=page.getByRole('button', { name: 'Log in' })
    }

    async loginmethod(user, pass){
        await this.click(this.loginlink)
        await this.fill(this.userlink,user)
        await this.fill(this.passwordlink,pass)
        await this.click(this.loginbutn)
    }

}