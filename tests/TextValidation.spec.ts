import {test, expect } from "@playwright/test";


test.describe('TextValidation', () => {
    
    test('Verify the home Text', async ({ page }) => {
        
        //open the url
        await page.goto('https://practice.automationbro.com/');

        //find the locator
        const homeText=await page.locator('#menu-item-489');

        //Verify the homeText
        await expect(homeText).toHaveText("Home");



    })
    test('Verify the multiple text link', async ({ page }) => {

        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];
        
        //open the url
        await page.goto('https://practice.automationbro.com/');

        //find the links
        const linkText=  page.locator('#primary-menu li[id*=menu]');
        //const menuLocator = page.locator("#primary-menu li a")

        //Verify the linkText
    
         expect(await linkText.allTextContents()).toEqual(expectedLinks);

         console.log(await linkText.allTextContents());
        //const menuText = await linkText.allTextContents()
       // for (let i=0;i<6;i++) {
            //await expect(menuLocator.nth(i)).toHaveText(expectedLinks[i])
          // console.log(menuText);
      //  }
        // console.log(menuText)
    })
    
})
