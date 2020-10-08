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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../pageObjects/calculator");
const protractor_1 = require("protractor");
const angularHomePage_1 = require("../pageObjects/angularHomePage");
const chai_1 = __importDefault(require("chai"));
//import { excelAttempt6 } from "../resource/locatorService";
var expect = chai_1.default.expect;
let calc = new calculator_1.calculator();
let ah = new angularHomePage_1.angularHomePage();
cucumber_1.Given('I will navigate to Calc Site', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
cucumber_1.Given('I will navigate to {string} page', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    if (string == "calc") {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (string == "AngularJs") {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
cucumber_1.When('I clicked on header link', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield ah.angularLink.click();
}));
cucumber_1.When('you will navigate to angular page', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    console.log("navigated to new page");
}));
cucumber_1.Then('you will enter {string} in search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.sleep(3000);
    yield ah.search.sendKeys(string);
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
}));
/*When('I add two Excel numbers \"([^\"]*)\"$"),  async(string)=> {
 // Write code here that turns the phrase above into concrete actions
 

 await calc.firstEditBox.sendKeys(string);
 await calc.secondEditBox.sendKeys(string2);
}); */
cucumber_1.Then('the output displayed should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.go.click();
    yield calc.getResult.getText().then(function (text) {
        expect(text).to.equal(string);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMERBQXVEO0FBQ3ZELDJDQUFxQztBQUNyQyxvRUFBaUU7QUFDakUsZ0RBQXdCO0FBQ3hCLDZEQUE2RDtBQUM3RCxJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQzVCLElBQUksRUFBRSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBQ3RCLGdCQUFLLENBQUMsOEJBQThCLEVBQUUsR0FBUSxFQUFFO0lBQzdDLG9FQUFvRTtJQUNwRSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7QUFFakUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNILGdCQUFLLENBQUMsa0NBQWtDLEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUN4RCxvRUFBb0U7SUFDdEUsSUFBRyxNQUFNLElBQUUsTUFBTSxFQUNqQjtRQUNFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztLQUNoRTtTQUNJLElBQUksTUFBTSxJQUFFLFdBQVcsRUFDNUI7UUFDRSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7S0FDN0M7QUFFRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDBCQUEwQixFQUFFLEdBQVEsRUFBRTtJQUN6QyxvRUFBb0U7SUFFcEUsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQy9CLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsbUNBQW1DLEVBQUUsR0FBUSxFQUFFO0lBQ2xELG9FQUFvRTtJQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyx1Q0FBdUMsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQzVELG9FQUFvRTtJQUNwRSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx5Q0FBeUMsRUFBRyxDQUFNLE1BQU0sRUFBRSxPQUFPLEVBQUMsRUFBRTtJQUN4RSxvRUFBb0U7SUFHcEUsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSDs7Ozs7O01BTUs7QUFHYixlQUFJLENBQUMseUNBQXlDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUN2RCxvRUFBb0U7SUFDcEUsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1FBRTdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9