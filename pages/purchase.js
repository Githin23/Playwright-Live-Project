
export class Purchase
    {

        constructor(page)
        {

            this.page=page;
            //this.category= this.page.getByRole('link',{name:'CategoryName'});
            this.cartbutton= this.page.getByRole('link',{name:'Cart', exact: true});
            this.placeorder= this.page.locator("//button[text()='Place Order']");
            this.name=this.page.locator("//input[@type='text' and @class='form-control' and @id='name']");
            this.country=this.page.locator("//input[@type='text' and @class='form-control' and @id='country']");
            this.city=this.page.locator("//input[@type='text' and @class='form-control' and @id='city']");
            this.creditcard=this.page.locator("//input[@type='text' and @class='form-control' and @id='card']");
            this.month=this.page.locator("//input[@type='text' and @class='form-control' and @id='month']");
            this.year=this.page.locator("//input[@type='text' and @class='form-control' and @id='year']");
            this.purchasebutton = this.page.getByRole('button',{name:'Purchase'});
            this.okay=this.page.getByRole('button',{name: 'OK'});
            this.logoutLink = this.page.getByRole('link',{name:'Log out'});

        }

        async selectCategory(categoryName) {
        await this.page.getByRole('link', { name: categoryName }).click();
        }

        async purchaseProduct()
        {
            
            await this.cartbutton.click();
            await this.placeorder.click();
            await this.name.fill('XYZ');
            await this.country.fill('India');
            await this.city.fill('Trivandrum');
            await this.creditcard.fill('12342');
            await this.month.fill('April');
            await this.year.fill('2026');
            await this.purchasebutton.click();  
        }

        async orderaccept()
        {
            await this.okay.click();
        }

        async logout()
        {
            await this.logoutLink.click();
        }


    }
