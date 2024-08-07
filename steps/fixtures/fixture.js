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
exports.test = void 0;
const playwright_bdd_1 = require("playwright-bdd");
//import { Loginclass } from '../../src/pages/login-page'
//type allStepClass={
//  loginobj:Loginclass;
//}
//export const test = base.extend<allStepClass>({
//  loginobj:async({page},use)=>{await use(new Loginclass(page));}
//})
const ass2_page_1 = require("../../src/pages/ass2-page");
exports.test = playwright_bdd_1.test.extend({
    loginobj: (_a, use_1) => __awaiter(void 0, [_a, use_1], void 0, function* ({ page }, use) { yield use(new ass2_page_1.Ass2class(page)); })
});
