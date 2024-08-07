import { createBdd } from "playwright-bdd";
import{test}from './fixtures/fixture';
const{Given, When, Then}=createBdd(test)
Then("login", async({loginobj})=>{
    await loginobj.ass2method();
})
//Then("navigate to the Dashboard page", async({loginobj})=>{
//    await loginobj.ass2method2();
//})
Given("validate the dashboard title", async({loginobj})=>{
    await loginobj.ass2method2();
})
Then("click the software cart link", async({loginobj})=>{
    await loginobj.ass2method3();
})
Then("Click the add button", async({loginobj})=>{
    await loginobj.ass2method4();
})
Then("validate the Add form", async({loginobj})=>{
    await loginobj.ass2method5();
})
Then("Enter Requested name", async({loginobj})=>{
    await loginobj.ass2method6();
})
Then("Enter Procurement Purpose", async({loginobj})=>{
    await loginobj.ass2method7();
})
Then("Enter Priority", async({loginobj})=>{
    await loginobj.ass2method8();
})
Then("Enter Remarks", async({loginobj})=>{
    await loginobj.ass2method9();
})
Then("Enter Item Category", async({loginobj})=>{
    await loginobj.ass2method10();
})
Then("Enter Item descriptions", async({loginobj})=>{
    await loginobj.ass2method11();
})
Then("Enter License type", async({loginobj})=>{
    await loginobj.ass2method12();
})
Then("Enter Specifications / Version No", async({loginobj})=>{
    await loginobj.ass2method13();
})
Then("Enter Requested Quantity / Item UOM", async({loginobj})=>{
    await loginobj.ass2method14();
})
Then("Enter Per Quantity(Only for Packets - Item UOM)", async({loginobj})=>{
    await loginobj.ass2method15();
})
Then("Enter AMC", async({loginobj})=>{
    await loginobj.ass2method16();
})

Then("Enter location of use region", async({loginobj})=>{
    await loginobj.ass2method17();
})

Then("Enter location of use country", async({loginobj})=>{
    await loginobj.ass2method18();
})

Then("Enter location", async({loginobj})=>{
    await loginobj.ass2method19();
})

Then("Enter purchase region", async({loginobj})=>{
    await loginobj.ass2method20();
})

Then("Enter purchase country", async({loginobj})=>{
    await loginobj.ass2method21();
})

Then("Enter domain name", async({loginobj})=>{
    await loginobj.ass2method22();
})

Then("Enter subdomain name", async({loginobj})=>{
    await loginobj.ass2method23();
})
Then("Enter PID", async({loginobj})=>{
    await loginobj.ass2method24();
})

Then("Enter caresoft entry", async({loginobj})=>{
    await loginobj.ass2method25();
})

Then("requested budget", async({loginobj})=>{
    await loginobj.ass2method26();
})

Then("base currency", async({loginobj})=>{
    await loginobj.ass2method27();
})
Then("Enter cost convesion year", async({loginobj})=>{
    await loginobj.ass2method28();
})
Then("choose billable", async({loginobj})=>{
    await loginobj.ass2method29();
})
Then("choose Work place", async({loginobj})=>{
    await loginobj.ass2method30();
})
Then("choose start date", async({loginobj})=>{
    await loginobj.ass2method31();
})
Then("choose End date", async({loginobj})=>{
    await loginobj.ass2method32();
})
Then("click save button", async({loginobj})=>{
    await loginobj.ass2method33();
})