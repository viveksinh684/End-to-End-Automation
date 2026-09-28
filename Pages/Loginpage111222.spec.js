exports.loginpage = class loginpage{

    constructor(page){
        this.page=page;
        this.loginlink='#login2'
        this.usernamelink='#loginusername'
        this.passwordlink='#loginpassword'
        this.submit=page.getByRole('button', { name: 'Log in' })
    }

    async gotolinkpage(){ await this.page.goto('https://www.demoblaze.com/index.html')}

    async login(username, password){
        await this.page.locator(this.loginlink).click()
        await this.page.locator(this.usernamelink).fill(username)
        await this.page.locator(this.passwordlink).fill(password)
        await this.page.locator(this.submit)





    }





}