import {test, expect } from "@playwright/test";

test.describe('formSubmit', () => {
    
    test('fill the form', async ({ page }) => {
        
        //open the url
        await page.goto('https://practice.automationbro.com/contact/');

        //fill the text field areas
        await page.locator('.contact-name .input-text').fill('Amrit');
        await page.locator('.validate-email .input-text').fill('automationng5@gmail.com');
        await page.locator('.contact-phone .input-text').fill('5675238738');
        await page.locator('.contact-message .input-text').fill('this is msg field area');

        // click on submit button
        await page.locator('#evf-submit-277').click();

        //verify the success msg
        await expect(page.locator('.everest-forms')).toHaveText(
            'Thanks for contacting us! We will be in touch with you shortly');

    })
    
})
