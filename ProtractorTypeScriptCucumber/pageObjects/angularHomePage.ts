import { ElementFinder,element,by } from "protractor";
//import {excelAttempt6} from '../resource/excelAttempt6';
//import * as locators from '../resource/locators.json';
//import {locatorService} from '../resource/locatorService';
//var x = new locatorService('Sheet1','./resource/UserData.xlsx');


//import {locatorService} from '../resource/locatingLocators';
//var x = new locatorService('Sheet1','./resource/UserData.xlsx');

import {locatorService} from '../resource/passingData1';
var x = new locatorService('Sheet1','./resource/UserData.xlsx');


export class angularHomePage
{
angularLink:ElementFinder;
search:ElementFinder;

constructor()
{
    //var y = x.read_from_excel('angular1');
    console.log(x);
    console.log("I am here");
    this.angularLink=element(by.linkText(x.read_from_excel('angular1')));
    this.search=element(by.css("input[type='search']"));
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