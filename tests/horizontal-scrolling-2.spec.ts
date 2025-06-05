import { expect, test } from '@playwright/test'

test.only('horizontal scrolling demo', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/scrollbars')
    console.log(await page.locator('#hidingButton').isVisible());
    await page.pause();

    await page.evaluate(() => { window.scrollTo(0, document.body.scrollHeight); });
    await page.pause();
    // Below code works well for child scrolling.
    await page.evaluate(() => {
        const el = document.querySelector('#core > div > div > div > div > div'); // Replace with your selector
        if (el) {
            el.scrollLeft += 150;
            el.scrollTop += 80;
        }
    });


    await page.pause();
    expect(page.locator('#hidingButton')).toBeVisible();



})