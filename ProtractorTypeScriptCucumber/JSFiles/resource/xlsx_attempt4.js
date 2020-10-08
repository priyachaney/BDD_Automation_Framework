"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xlsx_attempt4 = void 0;
var XLSX = require('xlsx');
function xlsx_attempt4(sheetName, filePath) {
    console.log(filePath);
    console.log(sheetName);
    let workbook = XLSX.readFile(filePath);
    let worksheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(worksheet);
}
exports.xlsx_attempt4 = xlsx_attempt4;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeF9hdHRlbXB0NC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Jlc291cmNlL3hsc3hfYXR0ZW1wdDQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLFNBQWdCLGFBQWEsQ0FBQyxTQUFhLEVBQUMsUUFBWTtJQUVwRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRTNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFL0MsQ0FBQztBQVRELHNDQVNDIn0=