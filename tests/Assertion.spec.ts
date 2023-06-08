import {test,expect} from "@playwright/test";
const path = require("path")
//import path from "path"

test.describe('Assertion', () => {

    test('Create new account', async ({ page }) => {

        //open the url
        await page.goto('https://www.amazon.in/');

        //use the hover() method to hover over an element 
        // await page.locator('#nav-link-accountList').hover();

        // click on start here
        // await page.getByText('Start here.').nth(0).click();

        // await page.getByPlaceholder('First and last name').fill('Amrit sharma');

      await expect(page.getByText('Make Money with Us')).toBeFocused();
    })
      test('Use Of Dropdown', async ({page})=>{

        await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');

       // await page.locator("p select").selectOption("Zimbabwe");
       // or
       //await page.locator('p select').last().click();

       await page.locator('#menu-item-2802').click();

      })  

      test.only('', async ({ page }) => {

        //Open the url
        await page.goto('https://practice.automationbro.com/cart/');

        //Give the path
        const pathFile = path.join(__dirname ,'../uploadFile/logo.jpg');

        //Upload file
       await page.setInputFiles('#upfile_1', pathFile);
      

        //Click on submit
         await page.locator('#upload_1 ').click();

        //verify the text msg
       await expect( page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully');


        
      })
      

    })
    
    

