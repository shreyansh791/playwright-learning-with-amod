// global.d.ts
import { Expect } from '@playwright/test';

declare global {
  namespace PlaywrightTest {
    interface Matchers<R, T> {
      toBeNumber(): R;
    }
  }
}
