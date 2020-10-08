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
        var results = data.map();
        for (let key of results.key()) {
            if (key == searchElement) {
                console.log("Map values" + results.values);
            }
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc2luZ0RhdGExLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcmVzb3VyY2UvcGFzc2luZ0RhdGExLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixNQUFhLGNBQWM7SUFNdkIsWUFBWSxTQUFpQixFQUFFLFFBQWdCO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBRTdCLENBQUM7SUFBQSxDQUFDO0lBR0YsZUFBZSxDQUFDLGFBQXNCO1FBQ2xDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELElBQUksSUFBSSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFekIsS0FBSSxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUM7WUFDekIsSUFBSSxHQUFHLElBQUksYUFBYSxFQUFDO2dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDNUM7U0FFSjtRQUVELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFBLEVBQUU7WUFFL0IsTUFBTSxDQUFDLElBQUksS0FBSyxhQUFhLENBQUM7WUFDOUIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFBO1FBSUQsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDO0lBQzVCLENBQUM7Q0FDSjtBQXRDRCx3Q0FzQ0M7QUFFRCxpQ0FBaUM7QUFDakMsb0VBQW9FO0FBQ3BFLGtCQUFrQiJ9