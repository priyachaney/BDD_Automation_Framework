import { StringLiteral } from "typescript";

var XLSX = require('xlsx');
export class locatorService {

    private filePath: string;
    private sheetName: string;


    constructor(sheetName: string, filePath: string) {
        this.sheetName = sheetName;
        this.filePath = filePath;

    };


    read_from_excel(searchElement : any):any {
        let workbook = XLSX.readFile(this.filePath);
        let worksheet = workbook.Sheets[this.sheetName];
        var a  = XLSX.utils.sheet_to_json(worksheet,{header:1});

        //Reading it as an Arry
        let max1:any;
        max1 = a.reduce(function (x:any, y:any):number{ return Math.max(x, y.length); }, 0);
        console.log(max1);

        let o = new Array(max1-1);
        for(var i = 0; i < max1-1; ++i) o[i] = {};
        a.forEach(function (row:any) { row.slice(1).forEach(function (elt:any, i:any) { o[i][row[0]] = elt; }); });

        console.log(o);

        //finding the element
        o.forEach(function(da:any):any{
            console.log("I am inside final loop");
            console.log(o);
            console.log(da.searchElement);
            return (da.searchElement);

        })



    
    }
}

//module.exports = excelAttempt6;
//let dd = new excelAttempt6('Sheet1', '../resource/UserData.xlsx');
//console.log(dd);