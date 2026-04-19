const { test, expect } = require("@playwright/test");   

export class loginPage
{

    constructor(page)
    {

        this.page=page;
        this.loginlink = this.page.getByRole('link',{name:'Log in'});
        this.username=this.page.locator('#loginusername');
        this.password =this.page.locator('#loginpassword');
        this.loginbtn = this.page.getByRole('button',{name:"Log in"})
        this.close = this.page.getByRole('button', { name: 'Close' }).last();
    }
    async logintest(usernameValue, passwordValue)
    {
        await this.loginlink.click();
        await this.username.fill(usernameValue);
        await this.password.fill(passwordValue);
        await this.loginbtn.click();
       
    }


}
