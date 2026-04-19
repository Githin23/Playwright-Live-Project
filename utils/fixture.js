const {test:base, expect} = require('@playwright/test');
//const { use } = require('react');
const { loginPage } = require("../pages/login");
const data = require('../utils/validLogin.json');


exports.test = base.extend({
    login: async({page}, use) =>{

        await page.goto("https://demoblaze.com/")
        const login = new loginPage(page);
        await login.logintest(data.username, data.password);
        await use();
    }

})