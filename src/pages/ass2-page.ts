import {BrowserContext,Locator,Page,} from "playwright/test";
export class Ass2class{
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
    pid:Locator;
    csentry:Locator;
    reqbudget:Locator;
    basecurrency:Locator;
    ccyear:Locator;
    billable:Locator;
    workplace:Locator;
    startdate:Locator;
    choosedate:Locator;
    enddate:Locator;
    save:Locator;


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
    this.domain=this.page.locator('[id="select2-ddlDomainCostCenter-container"]')
    this.subdomain=this.page.locator('[id="ddlSubdomainCostCenter"]')
    this.pid=this.page.locator('[id="ddlPIDCostCenter"]')
    this.csentry=this.page.locator('[id="ddlCaresoftEntity"]')
    this.reqbudget=this.page.locator('[id="txtCostBudgeted"]')
    this.basecurrency=this.page.getByRole('textbox', { name: 'Select Base Currency' })
    this.ccyear=this.page.locator('[id="ddlCostConversionYear"]')
    this.billable=this.page.locator('[id="RdnBillabeno"][name="RdnBillable"]')
    this.workplace=this.page.locator('[id="RdnWorkPlaceCustomer"][name="RdnWorkPlace"]')
    this.startdate=this.page.locator('[id="txtStartDate"]')
    this.choosedate=this.page.getByRole('cell', { name: '8', exact: true })
    this.enddate=this.page.locator('[id="txtEnddate"]')
    this.save=this.page.locator('[id="btnSave"]')

}
public async ass2method(){
    await this.page.goto(this.url)
    await this.username.fill('102331')
    await this.password.fill('Thean@14@')
    await this.password.press('Enter')
}
public async ass2method2(){   
    await this.Pagetitle.getByText("Request For")
}
public async ass2method3(){    
    await this.card.click()
    await this.page.waitForTimeout(4000)
}
public async ass2method4(){ 
    await this.Addbutton.click()
}
public async ass2method5(){ 
   await this.Pagetitle.getByText("General")
}
public async ass2method6(){
    await this.Requestorname.selectOption("Geethpriya Thiruvengadam-300947")
}
public async ass2method7(){
    await this.workscope.fill('test')
}
public async ass2method8(){
    await this.priority.selectOption("MD")
}
public async ass2method9(){
    await this.Remarks.fill('test remarks')
}
public async ass2method10(){
    await this.itemcategory.selectOption("Perpetual")
}
public async ass2method11(){
    await this.itemdescription.getByText('Item descriptions *')
    await this.page.waitForTimeout(5000)
}
public async ass2method12(){
    await this.licensetype.fill('test license')
}
public async ass2method13(){
    await this.specification.fill('test specification')
}
public async ass2method14(){
    await this.txtqty.fill('1')
    await this.page.waitForTimeout(4000)
    await this.UOM.selectOption("Units")
}
public async ass2method15(){
    await this.packetsqty.fill('2')
}
public async ass2method16(){
    await this.amc.fill('test amc')
    await this.page.pause()

}
public async ass2method17(){
    await this.locregion.selectOption('2')
    await this.page.pause()
}
public async ass2method18(){
    await this.loccountry.selectOption('13')
}
public async ass2method19(){
    await this.location.selectOption('1')
}
public async ass2method20(){
    await this.purregion.selectOption('1')
}
public async ass2method21(){
    await this.purcountry.selectOption('13')
}
public async ass2method22(){
    await this.domain.selectOption('15')
}
public async ass2method23(){
    await this.subdomain.selectOption('138')
}
public async ass2method24(){
    await this.pid.selectOption("CNHi3402-BI- Tool Development")
}
public async ass2method25(){
    await this.csentry.selectOption("Caresoft Global FZ LLC")
}
public async ass2method26(){
    await this.reqbudget.fill('10')
}
public async ass2method27(){
    await this.basecurrency.selectOption("INR")
}
public async ass2method28(){
    await this.ccyear.selectOption("Feb-2024")
}
public async ass2method29(){
    await this.billable.click()
}
public async ass2method30(){
    await this.workplace.click()
}
public async ass2method31(){
    await this.startdate.click()
    await this.choosedate.click()
}
public async ass2method32(){
    await this.enddate.click()
    await this.choosedate.click()
}
public async ass2method33(){
    await this.save.click()
}


}