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
const playwright_bdd_1 = require("playwright-bdd");
const fixture_1 = require("./fixtures/fixture");
const { Given, When, Then } = (0, playwright_bdd_1.createBdd)(fixture_1.test);
Then("login", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method();
}));
//Then("navigate to the Dashboard page", async({loginobj})=>{
//    await loginobj.ass2method2();
//})
Given("validate the dashboard title", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method2();
}));
Then("click the software cart link", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method3();
}));
Then("Click the add button", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method4();
}));
Then("validate the Add form", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method5();
}));
Then("Enter Requested name", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method6();
}));
Then("Enter Procurement Purpose", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method7();
}));
Then("Enter Priority", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method8();
}));
Then("Enter Remarks", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method9();
}));
Then("Enter Item Category", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method10();
}));
Then("Enter Item descriptions", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method11();
}));
Then("Enter License type", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method12();
}));
Then("Enter Specifications / Version No", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method13();
}));
Then("Enter Requested Quantity / Item UOM", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method14();
}));
Then("Enter Per Quantity(Only for Packets - Item UOM)", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method15();
}));
Then("Enter AMC", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method16();
}));
Then("Enter location of use region", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method17();
}));
Then("Enter location of use country", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method18();
}));
Then("Enter location", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method19();
}));
Then("Enter purchase region", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method20();
}));
Then("Enter purchase country", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method21();
}));
Then("Enter domain name", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method22();
}));
Then("Enter subdomain name", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method23();
}));
Then("Enter PID", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method24();
}));
Then("Enter caresoft entry", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method25();
}));
Then("requested budget", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method26();
}));
Then("base currency", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method27();
}));
Then("Enter cost convesion year", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method28();
}));
Then("choose billable", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method29();
}));
Then("choose Work place", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method30();
}));
Then("choose start date", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method31();
}));
Then("choose End date", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method32();
}));
Then("click save button", (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginobj }) {
    yield loginobj.ass2method33();
}));
