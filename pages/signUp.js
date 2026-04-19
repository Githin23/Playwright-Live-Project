const { test, expect } = require("@playwright/test");   

export class SignUpPage
{

    constructor(page)
    {

        this.page=page;
        this.signuplink = this.page.getByRole('link',{name:'Sign up'});
        this.username=this.page.getByLabel('Username');
        this.password =this.page.getByLabel('Password');
        this.submitbtn = this.page.getByRole('button',{name:"Sign up"})
        this.close = this.page.getByRole('button', { name: 'Close' }).last();
    }
    async clicklink()
    {
        await this.signuplink.click();
       
    }

    async enterCredentials(usernameValue, passwordValue) 
    {
        await this.username.fill(usernameValue);
        await this.password.fill(passwordValue);
    }

    async submitclick()
    {
        await this.submitbtn.click()
    }

     async closesubmit()
    {
        await this.close.click()
    }

}
