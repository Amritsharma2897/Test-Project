import{test, expect} from "@playwright/test"

test.describe('blogPage', () => {

    test('findout the all text on blog page', async ({ page }) => {

        //open the browser
        await page.goto('https://practice.automationbro.com/blog/');

        //find the locator
        const postList = page.locator('#recent-posts-3 ul li');
        console.log(await postList.count())
        const textContain = await postList.allTextContents()
        console.log(textContain)

       // print the all text 
       for(let i = 0; i<= await postList.count(); i++)
       {
           console.log(await postList.nth(i).textContent());
           expect(postList.nth(i)).toHaveText(textContain[i])
       }

    
    })
    
    
})
