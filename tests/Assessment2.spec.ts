import { test, expect } from '@playwright/test';
import { sampleclass } from '../src/pages/sample-page';
test('has title', async ({ page }) => {
    const logObj=new sampleclass(page)
    await logObj.samplemethod()
  })