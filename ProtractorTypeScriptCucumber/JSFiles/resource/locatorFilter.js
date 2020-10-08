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
        var data = XLSX.utils.sheet_to_json(worksheet);
        console.log(data);
        console.log(searchElement);
        var response = data.fitler(result => {
            result.name === searchElement;
            return result.locator;
        });
        return response.locator;
    }
}
exports.locatorService = locatorService;
//module.exports = excelAttempt6;
//let dd = new excelAttempt6('Sheet1', '../resource/UserData.xlsx');
//console.log(dd);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRvckZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Jlc291cmNlL2xvY2F0b3JGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLE1BQWEsY0FBYztJQU12QixZQUFZLFNBQWlCLEVBQUUsUUFBZ0I7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFFN0IsQ0FBQztJQUFBLENBQUM7SUFHRixlQUFlLENBQUMsYUFBc0I7UUFDbEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsSUFBSSxJQUFJLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFBLEVBQUU7WUFFL0IsTUFBTSxDQUFDLElBQUksS0FBSyxhQUFhLENBQUM7WUFDOUIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFBO1FBRUQsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDO0lBQzVCLENBQUM7Q0FDSjtBQTNCRCx3Q0EyQkM7QUFFRCxpQ0FBaUM7QUFDakMsb0VBQW9FO0FBQ3BFLGtCQUFrQiJ9