


class HomePage{

    constructor(page) {

        this.page = page;
        this.number =page.getByRole('button',{name: 'Mobile Number'});
        this.continueButton = page.getByRole('button', {name: 'Continue'})
    }



    async openApplication() {
        await this.page.goto('https://www.flipkart.com/', {    
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });
    
    }


    async searchProduct(productName) {
        this.searchBox = this.page.getByRole('textbox',{ name: 'Search for Products, Brands and More'});
        await this.searchBox.fill(productName);
        //await this.page.pause();

        await this.searchBox.press('Enter');
      

       }

    async opemFirstProduct() {
        
    }

     async addToCart() {
       
    }
}

export default HomePage;