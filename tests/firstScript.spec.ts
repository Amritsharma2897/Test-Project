import{test,expect} from '@playwright/test';

test.describe('firstscript', () => {
    test('Open the Aboutpage and Verify the Title', async ({ page }) => {
     
    //Open the url
    await page.goto('https://practice.automationbro.com/about/');
    
    //Verify the Title
    await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    })

    test('Open the Homepage and verify the title', async ({ page }) => {

        //Open the url
        await page.goto('https://practice.automationbro.com/');

        //Verify the title
        await expect(page).toHaveTitle('Practice E-Commerce Site – Automation Bro');

        
    })
    
    test('Click get start button using css selector', async ({ page }) => {
        
        //open the url
        await page.goto('https://practice.automationbro.com/');

        //click the button
        await page.locator('#get-started').click();

        //Verify the url
        await expect(page).toHaveURL('https://practice.automationbro.com/#get-started');

    })

    test('verify the headline text', async ({ page }) => {

        //open the url
       await page.goto('https://practice.automationbro.com/');

       //find the locator
      const headlineText= await page.locator('text=Think different. Make different');

      //verify the headlineText
      await expect(headlineText).toBeVisible();
  
    })
    
    
    
    
})
