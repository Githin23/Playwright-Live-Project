const { expect } = require("@playwright/test");
//const { loginPage } = require("../pages/login");
const { AddtoCart } = require("../pages/addToCart");
const { Purchase } = require("../pages/purchase");
const data = require('../utils/validLogin.json');
const {test} = require('../utils/fixture.js');

// test.beforeEach(async({page})=>{
//     await page.goto("https://demoblaze.com/");
// });

test(`Select a product under Phones for User ${data.username}`,async({login,page})=>{

    //const logintopage = new loginPage(page);
    const cart = new AddtoCart(page);
    const purchase = new Purchase(page);
    //await logintopage.logintest(data.username, data.password);
    await purchase.selectCategory('Phones');
    await cart.openProduct('Samsung galaxy s6');
    const message =await cart.addToCart();
    expect(message).toContain('Product added');
    await purchase.purchaseProduct();
    // const message2 = await purchase.orderaccept();
    // expect(message2).toContain('Thank you for your puchase');
    await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
    await purchase.orderaccept();

})

test(`Select a product under Monitors for User ${data.username}`,async({login,page})=>{

    //const logintopage = new loginPage(page);
    const cart = new AddtoCart(page);
    const purchase = new Purchase(page);
    //await logintopage.logintest(data.username, data.password);
    await purchase.selectCategory('Monitors');
    await cart.openProduct('Apple monitor 24');
    const message =await cart.addToCart();
    expect(message).toContain('Product added');
    await purchase.purchaseProduct();
    // const message2 = await purchase.orderaccept();
    // expect(message2).toContain('Thank you for your puchase'); 
    await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
    await purchase.orderaccept();

})


test.afterEach(async({page})=>{
    const purchase = new Purchase(page);
    await purchase.logout();

});





