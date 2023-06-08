import{test , expect} from "@playwright/test";

test.describe('locators', () => {

    test('use of all locators', async ({ page }) => {
        
        //open the bookcart page
        await page.goto('https://bookcart.azurewebsites.net/');

        //click on login text link
        await page.getByText('Login').click();

        //fill the datails and click on login button
        await page.getByLabel('Username').fill('ortoni');
        await page.getByLabel('Password').fill('pass1234');
        await page.getByRole('button', {name: "Login"}).nth(1).click();

        //click on search bar
        await page.getByPlaceholder('Search books or authors').type('Slayer');

        //search the book 
        await page.getByRole('option', {name : "Slayer"}).click();
        //await Option.getByText('Slayer').click();

        //click on book cover image
        await page.getByAltText('Book cover image').click();

        //click on add to card 
       await page.getByRole('button', {name : " Add to Cart"}).click();
       await page.getByText('shopping_cart').nth(0).click();

       const texts = await page.getByRole('link').allTextContents();


    
    })
    
    

})
