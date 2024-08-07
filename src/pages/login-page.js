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
exports.Loginclass = void 0;
const test_1 = require("playwright/test");
class Loginclass {
    constructor(page) {
        this.page = page;
        this.url = 'https://adaptiveqat.caresoftglobal.com/';
        this.username = this.page.locator('[id="frmLogin"] [id="txtUserID"][name="username"]').nth(0);
        this.password = this.page.locator('[id="txtPassword"][name="password"]').nth(0);
        this.signin = this.page.locator('[value="submit"][id="btnSubmit"]').nth(0);
        this.Pagetitle = this.page.locator('[class="text-center menutitle"]');
        this.transaction = this.page.locator('[name="Technical Publication"]');
        this.page1 = this.page.locator('[dname="Work"][name="Work Assignment"]');
        // this.settingicon=this.page.locator('[class="fa fa-list-alt"]')
        //  this.settingmenu=this.page.locator('[name="Setting"]')
        //  this.settingsubmenu=this.page.locator('[name="Dynamic Form"]')
        // this.formmaster=this.page.locator('[name="Form Master"]')
        //    this.formtitle=this.page.locator('[class="card-title"]')
        //this.formbutton=this.page.locator('[id="dropdownMenuClickableInside"][type="button"]')
        // this.formname=this.page.locator('[id="txtFormName"][type="text"]')
        // this.formstatus=this.page.locator('[id="ddlstatus"]')
        // this.formtype=this.page.locator('[id="ddlformtype"][name="Form Type"]')
    }
    loginmethod() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.goto(this.url);
            yield this.username.fill('102331');
            yield this.password.fill('Thean@14@');
            yield this.password.press('Enter'); // keyword action
            yield this.page.pause();
            // await this.signin.click()
            yield (0, test_1.expect)(this.Pagetitle).toContainText('techpub');
            //await this.transaction.click()
            // await this.page1.click()
            //  await this.settingicon.hover()
            // await this.settingmenu.click()
            //  await this.settingsubmenu.click()
            //  await this.formmaster.click()
            //  await this.formtitle.getByTitle("Form Master")
            //   await this.page.waitForTimeout(5000)
            //   await this.formbutton.dispatchEvent('click')
            //  await this.formname.fill('sample')
            //   await this.formstatus.selectOption("0")
            //   await this.formtype.selectOption("Main Form")
            yield this.page.pause();
        });
    }
}
exports.Loginclass = Loginclass;
