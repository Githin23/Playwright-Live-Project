const { test, expect } = require("@playwright/test");
const { loginPage } = require("../pages/login");
const { AddtoCart } = require("../pages/addToCart");
const dataset1 = require('../utils/validTestData.json');

test.beforeEach(async({page})=>{
    await page.goto("https://demoblaze.com/");
});

for(const data of dataset1)
{
    test(`Add to Cart for for ${data.username} and ${data.password}`,async({page})=>{

    const login = new loginPage(page);
    const cart = new AddtoCart(page);
    await login.logintest(data.username, data.password);
    await cart.openProduct('Samsung galaxy s6');
    const message =await cart.addToCart();
    expect(message).toContain('Product added');

})
}




