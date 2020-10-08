var XLSX = require('xlsx');
export function xlsx_attempt4(sheetName:any,filePath:any):any
{
    console.log(filePath);
    console.log(sheetName);
    let workbook = XLSX.readFile(filePath);   
    let worksheet = workbook.Sheets[sheetName];

    return XLSX.utils.sheet_to_json(worksheet);

}