const { test, expect } = require("@playwright/test");
const { SignUpPage } = require("../pages/signUp");
const data = require("../utils/signUp.json");
 
test.beforeEach(async({page})=>{
    await page.goto("https://demoblaze.com/");
})

test('Verify if user is able to Sign up',async({page})=>{

    const signUp = new SignUpPage(page);
    await signUp.clicklink();
    await signUp.enterCredentials(data.username, data.password);
    await signUp.submitclick();
});

test('Verify user can close Sign up dialog without entering data', async ({ page }) => {

    const signUp = new SignUpPage(page);
    await signUp.clicklink();
    await signUp.closesubmit();
    await expect(signUp.username).not.toBeVisible();
});
