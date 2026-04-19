const { test, expect } = require("@playwright/test");   

export class AddtoCart
{

    constructor(page)
    {

        this.page=page;
        //this.product= this.page.getByRole('link',{name:'ProductName'});
        this.addtocart= this.page.getByText('Add to cart');
    }

    async openProduct(productName) {

        await this.page.getByRole('link',{name: productName }).click();
    }
    async addToCart()
    {
        const dialogPromise = this.page.waitForEvent('dialog');
        await this.page.pause();
        await this.addtocart.click();
        //page.on('dialog', dialog=>dialog.dismiss());
        const dialog = await dialogPromise;
        await dialog.accept();
        return dialog.message();
    }

}
