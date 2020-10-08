"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.angularHomePage = void 0;
const protractor_1 = require("protractor");
//import {excelAttempt6} from '../resource/excelAttempt6';
//import * as locators from '../resource/locators.json';
//import {locatorService} from '../resource/locatorService';
//var x = new locatorService('Sheet1','./resource/UserData.xlsx');
//import {locatorService} from '../resource/locatingLocators';
//var x = new locatorService('Sheet1','./resource/UserData.xlsx');
const passingData1_1 = require("../resource/passingData1");
var x = new passingData1_1.locatorService('Sheet1', './resource/UserData.xlsx');
class angularHomePage {
    constructor() {
        //var y = x.read_from_excel('angular1');
        console.log(x);
        console.log("I am here");
        this.angularLink = protractor_1.element(protractor_1.by.linkText(x.read_from_excel('angular1')));
        this.search = protractor_1.element(protractor_1.by.css("input[type='search']"));
        //this.angularLink=element(by.linkText(locators.Locators.angularLink));
        //this.search=element(by.css(locators.Locators.search));
        //console.log("this is dd" + exec.read_from_excel('Sheet1','./resource/UserData.xlsx'));
        console.log(x.read_from_excel('searchdata'));
        /*this.angularLink=element(by.linkText(xl);
        console.log(dd.angular);
        console.log(dd.search)
        this.search=element(by.css(xl.search));*/
    }
}
exports.angularHomePage = angularHomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhckhvbWVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvYW5ndWxhckhvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFzRDtBQUN0RCwwREFBMEQ7QUFDMUQsd0RBQXdEO0FBQ3hELDREQUE0RDtBQUM1RCxrRUFBa0U7QUFHbEUsOERBQThEO0FBQzlELGtFQUFrRTtBQUVsRSwyREFBd0Q7QUFDeEQsSUFBSSxDQUFDLEdBQUcsSUFBSSw2QkFBYyxDQUFDLFFBQVEsRUFBQywwQkFBMEIsQ0FBQyxDQUFDO0FBR2hFLE1BQWEsZUFBZTtJQUs1QjtRQUVJLHdDQUF3QztRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsTUFBTSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDcEQsdUVBQXVFO1FBQ3ZFLHdEQUF3RDtRQUN4RCx3RkFBd0Y7UUFDeEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFHN0M7OztpREFHeUM7SUFDN0MsQ0FBQztDQUdBO0FBekJELDBDQXlCQyJ9