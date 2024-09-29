import test, { expect } from "@playwright/test";
// we can name our test file with .spec.ts or .test.ts and playwright supports both the format
test('submit form', async ({ page }) => {
    await page.goto('https://github.com/');
    await expect(await page.title()).toBe('GitHub: Let’s build from here · GitHub');
    await expect(page).toHaveTitle('GitHub: Let’s build from here · GitHub')
})

// npx playwright test
// npx playwright test filename
// npx playwright test -g "test name"
// npx playwright test --grep "test name"
// npx playwright test --grep "@tag"

/**
 * 
 * npx is a command line tool which is bundled with node js
 * and this will help us to run any node js package without installing them 
 * globally. 
 */

// >wmic cpu get NumberOfCores, NumberOfLogicalProcessors
// NumberOfCores  NumberOfLogicalProcessors
// 10             12