exports.login= class loginpage {

constructor(page){
this.page=page
this.loginlocator='#login2'
this.username='input#loginusername'
this.password='input#loginpassword'
this.submit=page.locator('button.btn.btn-secondary:visible')
}

async loginurl(){await this.page.goto('https://www.demoblaze.com/index.html')}

async loginmethod(username, password){

    await this.page.locator(this.loginlocator).click()
    await this.page.locator(this.username).fill(username)
    await this.page.locator(this.password).fill(password)
    await this.submit.click()

}





}