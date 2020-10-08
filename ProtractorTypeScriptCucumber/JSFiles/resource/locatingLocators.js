"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locatorService = void 0;
var XLSX = require('xlsx');
class locatorService {
    constructor(sheetName, filePath) {
        this.sheetName = sheetName;
        this.filePath = filePath;
    }
    ;
    read_from_excel(searchElement) {
        let workbook = XLSX.readFile(this.filePath);
        let worksheet = workbook.Sheets[this.sheetName];
        var a = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        //Reading it as an Arry
        let max1;
        max1 = a.reduce(function (x, y) { return Math.max(x, y.length); }, 0);
        console.log(max1);
        let o = new Array(max1 - 1);
        for (var i = 0; i < max1 - 1; ++i)
            o[i] = {};
        a.forEach(function (row) { row.slice(1).forEach(function (elt, i) { o[i][row[0]] = elt; }); });
        console.log(o);
        //finding the element
        o.forEach(function (da) {
            console.log("I am inside final loop");
            console.log(o);
            console.log(da.searchElement);
            return (da.searchElement);
        });
    }
}
exports.locatorService = locatorService;
//module.exports = excelAttempt6;
//let dd = new excelAttempt6('Sheet1', '../resource/UserData.xlsx');
//console.log(dd);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpbmdMb2NhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Jlc291cmNlL2xvY2F0aW5nTG9jYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLE1BQWEsY0FBYztJQU12QixZQUFZLFNBQWlCLEVBQUUsUUFBZ0I7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFFN0IsQ0FBQztJQUFBLENBQUM7SUFHRixlQUFlLENBQUMsYUFBbUI7UUFDL0IsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7UUFFeEQsdUJBQXVCO1FBQ3ZCLElBQUksSUFBUSxDQUFDO1FBQ2IsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFLLEVBQUUsQ0FBSyxJQUFVLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDMUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQU8sSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQU8sRUFBRSxDQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFM0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVmLHFCQUFxQjtRQUNyQixDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVMsRUFBTTtZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFOUIsQ0FBQyxDQUFDLENBQUE7SUFLTixDQUFDO0NBQ0o7QUExQ0Qsd0NBMENDO0FBRUQsaUNBQWlDO0FBQ2pDLG9FQUFvRTtBQUNwRSxrQkFBa0IifQ==