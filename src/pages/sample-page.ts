import {BrowserContext,Locator,Page,} from "playwright/test";
import { data } from "../../Dataset/login";
export class sampleclass {
    page:Page;
    username:Locator;
    password:Locator;
    signin:Locator;
    url:string;
    Pagetitle:Locator;
    card:Locator;
    Addbutton:Locator;
    popup:Locator;
    Requestorname:Locator;
    workscope:Locator;
    priority:Locator;
    Remarks:Locator;
    itemcategory:Locator;
    itemdescription:Locator;
    licensetype:Locator;
    specification:Locator;
    txtqty:Locator;
    UOM:Locator;
    packetsqty:Locator;
    amc:Locator;
    locregion:Locator;
    loccountry:Locator;
    location:Locator;
    purregion:Locator;
    purcountry:Locator;
    domain:Locator;
    subdomain:Locator;
    //pid:Locator;
    csentry:Locator;
    reqbudget:Locator;
    basecurrency:Locator;
    ccyear:Locator;
    billable:Locator;
    workplace:Locator;
    startdate:Locator;
    choosedate:Locator;
    enddate:Locator;
    enddatechoose:Locator;
    save:Locator;
    piddrop:Locator;
    attachment:Locator;
    upload:Locator;
    doctype:Locator;
    uploadbtn:Locator;
    uploadpopup:Locator;
    popupclose:Locator;


constructor(page:Page){
    this.page=page;
    this.url='https://procurementqat.caresoftglobal.com/'
    this.username=this.page.locator('[id="txtUserID"][name="username"]')
    this.password=this.page.locator('[id="txtPassword"][name="password"]')
    this.signin=this.page.locator('[id="btnSubmit"][value="submit"]')
    this.Pagetitle=this.page.getByText('[class="sidebar-section sidebar-section-body d-flex align-items-center pb-0"]')
    this.card=this.page.getByRole('link', { name: ' Software Perpetual,' })
    this.Addbutton=this.page.locator('[id="btnadd"][type="submit"]')
    this.popup=this.page.getByRole('link', { name: ' General ' })
    this.Requestorname=this.page.locator('[id="ddlRequesterName"]')
    this.workscope=this.page.locator('[id="txtProcurementPurpose"]')
    this.priority=this.page.locator('[id="ddlPriority"]')
    this.Remarks=this.page.locator('[id="txtRemarks"]')
    this.itemcategory=this.page.locator('[id="ddlItemCategory"]')
    this.itemdescription=this.page.locator('[id="ddlItemdescriptions"]')
    this.licensetype=this.page.locator('[id="txtLicensetype"]')
    this.specification=this.page.locator('[id="txtSpecifications"]')
    this.txtqty=this.page.locator('[id="txtQty"]')
    this.UOM=this.page.locator('[id="ddlQtyUOM"]')
    this.packetsqty=this.page.locator('[id="txtPerQuantity"]')
    this.amc=this.page.locator('[id="txtAMC"]')
    this.locregion=this.page.locator('[id="ddlLocationRegion"]')
    this.loccountry=this.page.locator('[id="ddlLocationCountry"]')
    this.location=this.page.locator('[id="ddlLocation"]')
    this.purregion=this.page.locator('[id="ddlPurchaseRegion"]')
    this.purcountry=this.page.locator('[id="ddlPurchaseCountry"]')
    this.domain=this.page.locator('[id="ddlDomainCostCenter"]')
    this.subdomain=this.page.locator('[id="ddlSubdomainCostCenter"]')
    this.piddrop=this.page.locator('[title="None selected"]').nth(0)
    ///this.pid=this.page.locator('[class="form-check-input"][value="CNHi3402"]')
    this.csentry=this.page.locator('[id="ddlCaresoftEntity"]')
    this.reqbudget=this.page.locator('[id="txtCostBudgeted"]')
    this.basecurrency=this.page.locator('[id="ddlBaseCurrency"]')
    this.ccyear=this.page.locator('[id="ddlCostConversionYear"]')
    this.billable=this.page.locator('[id="RdnBillabeno"][name="RdnBillable"]')
    this.workplace=this.page.locator('[id="RdnWorkPlaceCustomer"][name="RdnWorkPlace"]')
    this.startdate=this.page.locator('[id="txtStartDate"]')
    this.choosedate=this.page.getByRole('cell', { name: '8', exact: true })
    this.enddate=this.page.locator('[id="txtEnddate"]')
this.enddatechoose=this.page.locator('[class="weekend available"]').nth(0)
    this.save=this.page.locator('[id="btnSave"]')
    this.attachment=this.page.locator('[id="btnAttachment"]')
    this.doctype=this.page.locator('[id="ddlDocType"]')
    this.upload=this.page.locator('[id="fileUpload"]')
    this.uploadbtn=this.page.locator('[id="btnUpload"]')
    this.uploadpopup=this.page.locator('[class="btn btn-primary bootbox-accept"]')
    this.popupclose=this.page.locator('[class="btn-close btn-close-white"]').nth(1)

}
public async samplemethod(){
    await this.page.goto(this.url)
    await this.username.fill(data.user)
    await this.password.fill(data.password)
    await this.signin.click()
    await this.page.waitForTimeout(4000)
    //await this.Pagetitle.getByText("Request For")
        // Validate the page title
        const title = await this.page.title();
         if (title === 'Procurement Request') {
         console.log('Page title is correct.');
             } else {
                console.error(`Page title is incorrect. Expected 'Expected Title' but got '${title}'.`);
             }
    await this.card.click()
        // Wait for the page to reach the 'load' state
        await this.page.waitForLoadState('load');
        console.log('Page has fully loaded.');
    await this.Addbutton.click()
    //await this.Pagetitle.getByText("General")
    await this.Requestorname.selectOption("Geethpriya Thiruvengadam-300947")
    await this.workscope.fill('test')
    await this.priority.selectOption("MD")
    await this.Remarks.fill('test remarks')
    await this.itemcategory.selectOption("Perpetual")
    await this.itemdescription.getByText('Item descriptions *')
    await this.page.waitForTimeout(5000)
    await this.licensetype.fill('test license')
    await this.specification.fill('test specification')
    await this.txtqty.fill('1')
    await this.page.waitForTimeout(4000)
    await this.UOM.selectOption("Units")
    await this.packetsqty.fill('2')
    await this.amc.fill('test amc')
    await this.page.pause()
    await this.locregion.selectOption('2')
    await this.page.pause()
    await this.loccountry.selectOption('24')
    await this.location.selectOption('175')
    await this.purregion.selectOption('1')
    await this.purcountry.selectOption("Canada")
    await this.domain.selectOption('15')
    await this.subdomain.selectOption('138')
    await this.piddrop.click()
    await this.page.locator('[type="checkbox"][value="BBB111641"]').click()
    /*async function checkcheckbox(page: Page, checkboxText: string): Promise<void> {
        const checkloc=('input[type="checkbox"][value="BBB111641"]')
        await page.waitForSelector(checkloc)
    const checkbox=page.locator(checkloc)
        const isChecked=await checkbox.isChecked();
        if (!isChecked) {
            await checkbox.check();
        }
    }*/
    await this.csentry.selectOption("Caresoft Global FZ LLC")
    await this.reqbudget.fill('10')
    await this.basecurrency.selectOption("INR")
    await this.ccyear.selectOption("Feb-2024")
    await this.billable.click()
    await this.workplace.click()
    await this.startdate.click()
    await this.choosedate.click()
    await this.enddate.click()
    await this.choosedate.click()
    await this.enddatechoose.click()
    await this.page.waitForTimeout(2000)
    //using CSSselector to check the date picker has value or not
        const hasValue = await this.page.evaluate(() => {
            const input = document.querySelector('#txtEnddate') as HTMLInputElement;
            return input ? input.value.trim() !== '' : true;      
        });
        
        if (hasValue) {
            console.log('Date picker has a selected value.');
         } else {
            console.log('Date picker does not have a selected value.');
    }
    await this.attachment.click()
    await this.doctype.selectOption('PO')
    //await this.upload.click()
    await this.upload.setInputFiles('C:/Users/102331/OneDrive - Caresoft Global Private Ltd,/Desktop/Playwright_automation/Sprint9planning.xlsx')
    await this.uploadbtn.click()
    await this.uploadpopup.click()
    await this.page.waitForTimeout(3000)
    await this.popupclose.click()
    await this.save.click()

}
}
