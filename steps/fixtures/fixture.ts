import{test as base}from 'playwright-bdd'
//import { Loginclass } from '../../src/pages/login-page'
//type allStepClass={
  //  loginobj:Loginclass;
//}
//export const test = base.extend<allStepClass>({
  //  loginobj:async({page},use)=>{await use(new Loginclass(page));}
//})
import { Ass2class } from '../../src/pages/ass2-page';
type allStepClass={
   loginobj:Ass2class;
}
export const test = base.extend<allStepClass>({
  loginobj:async({page},use)=>{await use(new Ass2class(page));}
})