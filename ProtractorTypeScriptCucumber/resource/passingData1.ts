import { StringLiteral } from "typescript";

var XLSX = require('xlsx');
export class locatorService {

    private filePath: string;
    private sheetName: string;


    constructor(sheetName: string, filePath: string) {
        this.sheetName = sheetName;
        this.filePath = filePath;

    };


    read_from_excel(searchElement : string) {
        let workbook = XLSX.readFile(this.filePath);
        let worksheet = workbook.Sheets[this.sheetName];
        var data  = XLSX.utils.sheet_to_json(worksheet);
        console.log(data);
        console.log(searchElement);
        var results = data.map();

        for(let key of results.key()){
            if (key == searchElement){
                console.log("Map values"+results.values);
            }
            
        }

        var response = data.fitler(result=>{
            
            result.name === searchElement;
            return result.locator;
       })



        return response.locator;
    }
}

//module.exports = excelAttempt6;
//let dd = new excelAttempt6('Sheet1', '../resource/UserData.xlsx');
//console.log(dd);