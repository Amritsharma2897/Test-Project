import{test, expect} from "@playwright/test";

test.describe('letestPost', () => {
    
test('verify the letest post and count', async ({ page }) => {
        
    //open the blogpage
    await page.goto('https://practice.automationbro.com/blog/');

    //find the letest posts list
    const postList=page.locator('#recent-posts-4 ul li');

    //print the postlist
    //for(let i=0; i<await postList.count(); i++)
   // {
       // console.log(await postList.nth(i).textContent());

  //  }

    //verify the count

    expect(await postList.count()).toEqual(3);




    })
    
})
