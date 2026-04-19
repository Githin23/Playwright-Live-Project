const { test, expect } = require("@playwright/test");
const { loginPage } = require("../pages/login");
// const dataset = require('../utils/invalidTestData.json');
const dataset1 = JSON.parse(JSON.stringify(require('../utils/invalidTestData.json')));
const dataset2 = JSON.parse(JSON.stringify(require('../utils/validTestData.json')));
 
test.beforeEach(async({page})=>{
    await page.goto("https://demoblaze.com/");
})


for(const data of dataset1)
{
    test(`Valid Login for ${data.username} and ${data.password}`,async({page})=>{

    const login = new loginPage(page);
    await login.logintest(data.username, data.password);

})
}

for(const data of dataset2)
{
    test(`Invalid Login for ${data.username} and ${data.password}`,async({page})=>{

    const login = new loginPage(page);
    await login.logintest(data.username, data.password);

})
}



// dataset.forEach((data, index) => {
// test(`Invalid Login test - ${index + 1}`,async({page})=>{

//     const login = new loginPage(page);
//     await login.logintest(data.username, data.password);
// });
// });

