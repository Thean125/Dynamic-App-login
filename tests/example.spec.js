"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const login_page_1 = require("../src/pages/login-page");
(0, test_1.test)('has title', (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    const logObj = new login_page_1.Loginclass(page);
    yield logObj.loginmethod();
}));
//  //Expect a title "to contain" a substring.
// await expect(page).toHaveTitle(/Playwright/); });
// test('get started link', async ({ page }) => {
//  await page.goto('https://playwright.dev/');
// //Click the get started link.
// await page.getByRole('link', { name: 'Get started' }).click();
// //Expects page to have a heading with the name of Installation.
// await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
