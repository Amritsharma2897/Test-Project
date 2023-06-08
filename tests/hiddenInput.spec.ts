import{test, expect} from "@playwright/test";
const path = require('path');

test.describe('hiddenInput', () => {

    test('Explanation of hidden input', async ({ page }) => {

        // open the url
        await page.goto('https://practice.automationbro.com/cart/');

        //give the path
        const pathFile = path.join(__dirname, '../uploadFile/logo.jpg');

           // Dom manipulation
      await page.evaluate(() => {

         const Selector = document.querySelector('#upfile_1');
    
         if(Selector) {

             Selector.className = ''  
         }

     })

    //upload the file
    await page.setInputFiles('#upfile_1', pathFile);

    await expect( page.locator('#upfile_1')).not.toHaveClass('file_input_hidden');
      
    //click on submit button
    await page.locator('#upload_1 ').click();

    //verify
    await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully');

})
})
