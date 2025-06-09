import { expect as baseExpect } from '@playwright/test';

export const expect = baseExpect.extend({
    toBeNumber(received) {
        const pass = typeof received === 'number' && !isNaN(received);
        if (pass) {
            return {
                message: () => `passed`,
                pass: true
            };
        } else {
            return {
                message: () => `You expected ${received} to be a number but found ${received} to be ${typeof received}`,
                pass: false
            };
        }
    }
});
