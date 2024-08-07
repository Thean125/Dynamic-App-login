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
exports.Ass2class = void 0;
class Ass2class {
    constructor(page) {
        this.page = page;
        this.url = 'https://procurementqat.caresoftglobal.com/';
        this.username = this.page.locator('[id="txtUserID"][name="username"]');
        this.password = this.page.locator('[id="txtPassword"][name="password"]');
        this.signin = this.page.locator('[id="btnSubmit"][value="submit"]');
        this.Pagetitle = this.page.getByText('[class="sidebar-section sidebar-section-body d-flex align-items-center pb-0"]');
        this.card = this.page.getByRole('link', { name: ' Software Perpetual,' });
        this.Addbutton = this.page.locator('[id="btnadd"][type="submit"]');
        this.popup = this.page.getByRole('link', { name: ' General ' });
        this.Requestorname = this.page.locator('[id="ddlRequesterName"]');
        this.workscope = this.page.locator('[id="txtProcurementPurpose"]');
        this.priority = this.page.locator('[id="ddlPriority"]');
        this.Remarks = this.page.locator('[id="txtRemarks"]');
        this.itemcategory = this.page.locator('[id="ddlItemCategory"]');
        this.itemdescription = this.page.locator('[id="ddlItemdescriptions"]');
        this.licensetype = this.page.locator('[id="txtLicensetype"]');
        this.specification = this.page.locator('[id="txtSpecifications"]');
        this.txtqty = this.page.locator('[id="txtQty"]');
        this.UOM = this.page.locator('[id="ddlQtyUOM"]');
        this.packetsqty = this.page.locator('[id="txtPerQuantity"]');
        this.amc = this.page.locator('[id="txtAMC"]');
        this.locregion = this.page.locator('[id="ddlLocationRegion"]');
        this.loccountry = this.page.locator('[id="ddlLocationCountry"]');
        this.location = this.page.locator('[id="ddlLocation"]');
        this.purregion = this.page.locator('[id="ddlPurchaseRegion"]');
        this.purcountry = this.page.locator('[id="ddlPurchaseCountry"]');
        this.domain = this.page.locator('[id="select2-ddlDomainCostCenter-container"]');
        this.subdomain = this.page.locator('[id="ddlSubdomainCostCenter"]');
        this.pid = this.page.locator('[id="ddlPIDCostCenter"]');
        this.csentry = this.page.locator('[id="ddlCaresoftEntity"]');
        this.reqbudget = this.page.locator('[id="txtCostBudgeted"]');
        this.basecurrency = this.page.getByRole('textbox', { name: 'Select Base Currency' });
        this.ccyear = this.page.locator('[id="ddlCostConversionYear"]');
        this.billable = this.page.locator('[id="RdnBillabeno"][name="RdnBillable"]');
        this.workplace = this.page.locator('[id="RdnWorkPlaceCustomer"][name="RdnWorkPlace"]');
        this.startdate = this.page.locator('[id="txtStartDate"]');
        this.choosedate = this.page.getByRole('cell', { name: '8', exact: true });
        this.enddate = this.page.locator('[id="txtEnddate"]');
        this.save = this.page.locator('[id="btnSave"]');
    }
    ass2method() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.goto(this.url);
            yield this.username.fill('102331');
            yield this.password.fill('Thean@14@');
            yield this.password.press('Enter');
        });
    }
    ass2method2() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Pagetitle.getByText("Request For");
        });
    }
    ass2method3() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.card.click();
            yield this.page.waitForTimeout(4000);
        });
    }
    ass2method4() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Addbutton.click();
        });
    }
    ass2method5() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Pagetitle.getByText("General");
        });
    }
    ass2method6() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Requestorname.selectOption("Geethpriya Thiruvengadam-300947");
        });
    }
    ass2method7() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.workscope.fill('test');
        });
    }
    ass2method8() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.priority.selectOption("MD");
        });
    }
    ass2method9() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Remarks.fill('test remarks');
        });
    }
    ass2method10() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.itemcategory.selectOption("Perpetual");
        });
    }
    ass2method11() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.itemdescription.getByText('Item descriptions *');
            yield this.page.waitForTimeout(5000);
        });
    }
    ass2method12() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.licensetype.fill('test license');
        });
    }
    ass2method13() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.specification.fill('test specification');
        });
    }
    ass2method14() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.txtqty.fill('1');
            yield this.page.waitForTimeout(4000);
            yield this.UOM.selectOption("Units");
        });
    }
    ass2method15() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.packetsqty.fill('2');
        });
    }
    ass2method16() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.amc.fill('test amc');
            yield this.page.pause();
        });
    }
    ass2method17() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.locregion.selectOption('2');
            yield this.page.pause();
        });
    }
    ass2method18() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loccountry.selectOption('13');
        });
    }
    ass2method19() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.location.selectOption('1');
        });
    }
    ass2method20() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.purregion.selectOption('1');
        });
    }
    ass2method21() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.purcountry.selectOption('13');
        });
    }
    ass2method22() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.domain.selectOption('15');
        });
    }
    ass2method23() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.subdomain.selectOption('138');
        });
    }
    ass2method24() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.pid.selectOption("CNHi3402-BI- Tool Development");
        });
    }
    ass2method25() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.csentry.selectOption("Caresoft Global FZ LLC");
        });
    }
    ass2method26() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.reqbudget.fill('10');
        });
    }
    ass2method27() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.basecurrency.selectOption("INR");
        });
    }
    ass2method28() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ccyear.selectOption("Feb-2024");
        });
    }
    ass2method29() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.billable.click();
        });
    }
    ass2method30() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.workplace.click();
        });
    }
    ass2method31() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.startdate.click();
            yield this.choosedate.click();
        });
    }
    ass2method32() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.enddate.click();
            yield this.choosedate.click();
        });
    }
    ass2method33() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.save.click();
        });
    }
}
exports.Ass2class = Ass2class;
