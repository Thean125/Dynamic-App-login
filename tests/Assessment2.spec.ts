import { test, expect } from '@playwright/test';
import { Ass2class } from '../src/pages/ass2-page';

test('has title', async ({ page }) => {
    const logObj=new Ass2class(page)
    await logObj.ass2method()
  })