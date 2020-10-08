"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excelAttempt6 = void 0;
var XLSX = require('xlsx');
class excelAttempt6 {
    constructor() {
    }
    ;
    read_from_excel(sheetName, filePath) {
        let workbook = XLSX.readFile(filePath);
        let worksheet = workbook.Sheets[sheetName];
        let a = XLSX.utils.sheet_to_json(worksheet);
        return (a);
    }
}
exports.excelAttempt6 = excelAttempt6;
//module.exports = excelAttempt6;
//let dd = new excelAttempt6('Sheet1', '../resource/UserData.xlsx');
//console.log(dd);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWxBdHRlbXB0Ni5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Jlc291cmNlL2V4Y2VsQXR0ZW1wdDYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLE1BQWEsYUFBYTtJQUV0QjtJQUVBLENBQUM7SUFBQSxDQUFDO0lBRUYsZUFBZSxDQUFDLFNBQWlCLEVBQUUsUUFBZ0I7UUFDL0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNmLENBQUM7Q0FDSjtBQVpELHNDQVlDO0FBRUQsaUNBQWlDO0FBQ2pDLG9FQUFvRTtBQUNwRSxrQkFBa0IifQ==