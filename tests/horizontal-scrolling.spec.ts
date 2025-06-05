import { test } from '@playwright/test'

test('horizontal scrolling demo', async ({ page }) => {
    await page.goto('https://www.tutorialspoint.com/selenium/practice/horizontal-scroll.php')
    // const scrollableContainer = page.locator('.horizan-scroll');
    // await scrollableContainer.hover();
    console.log("document; ", 100);
    await page.pause();
    // Below code works and will scroll the page.
    // await page.evaluate(() => {
    //     window.scrollBy(0, 200)
    // })
   
    await page.evaluate(() => { window.scrollTo(0, document.body.scrollHeight); });
 await page.pause();
    // Below code works well for child scrolling.
    await page.evaluate(() => {
        const el = document.querySelector('.horizan-scroll'); // Replace with your selector
        if (el) {
            el.scrollLeft += 200;
            el.scrollLeft = el.scrollLeft - 200;
            el.scrollLeft += 200;
            el.scrollLeft = el.scrollLeft - 100;
            el.scrollTop += 300;
        }
    });


    await page.pause();


    // Below code is working
    // await page.mouse.wheel(0, 800)
    // await page.waitForTimeout(3000)
    // await page.mouse.wheel(500, 0)
    // await page.waitForTimeout(5000)



})