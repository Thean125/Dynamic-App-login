import { TIMEOUT } from "dns";
import { BrowserContext, Locator, Page, expect } from "playwright/test";
export class Loginclass{
  page: Page;
  username: Locator;
  password: Locator;
  signin: Locator;
  url: string;
 // Pagetitle: Locator;
  // settingicon:Locator;
  // settingmenu:Locator;
  // settingsubmenu:Locator;
  // formmaster:Locator;
  // formtitle:Locator;
  // formbutton:Locator;
  // formname:Locator;
  // formstatus:Locator;
  //  formtype:Locator;
  transaction: Locator;
  page1: Locator;



  constructor(page: Page) {
    this.page = page;
    this.url = 'https://adaptiveqat.caresoftglobal.com/'
    
    this.username = this.page.locator('[id="frmLogin"] [id="txtUserID"][name="username"]').nth(0);
    this.password = this.page.locator('[id="txtPassword"][name="password"]').nth(0)
    this.signin = this.page.locator('[value="submit"][id="btnSubmit"]').nth(0);
   // this.Pagetitle = this.page.locator('[class="text-center menutitle"]');
    this.transaction = this.page.locator('[name="Technical Publication"]')
    this.page1 = this.page.locator('[dname="Work"][name="Work Assignment"]')
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
  public async loginmethod() {
    await this.page.goto(this.url)
  /* const txt= await this.page.$$('form-control')
  for (const input of txt){
    const txtuser =await input.textContent()
    //const txtuser =await input.evaluate(pl => pl.getAttribute('placeholder'))
    console.log(txtuser)
    await this.page.pause()
   if(txtuser==="User ID / Email ID")
   {
    await input.focus()
    await this.page.pause()
    await input.fill('102331')
    await this.page.pause()
   }
  } */
   await this.username.fill('102331')
    await this.password.fill('Thean@14@')
    await this.password.press('Enter')// keyword action
    await this.page.pause()
    //await this.signin.click()
    //await expect(this.Pagetitle).toContainText('Tech Pub')
   
    await this.transaction.click()

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
    await this.page.pause()



  }

}
