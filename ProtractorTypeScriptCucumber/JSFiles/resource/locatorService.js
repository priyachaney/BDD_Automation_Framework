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
        var response = data.find(result => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRvclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9yZXNvdXJjZS9sb2NhdG9yU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsTUFBYSxjQUFjO0lBTXZCLFlBQVksU0FBaUIsRUFBRSxRQUFnQjtRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUU3QixDQUFDO0lBQUEsQ0FBQztJQUdGLGVBQWUsQ0FBQyxhQUFzQjtRQUNsQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRCxJQUFJLElBQUksR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUEsRUFBRTtZQUU3QixNQUFNLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQztZQUM5QixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUE7UUFFRCxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDNUIsQ0FBQztDQUNKO0FBM0JELHdDQTJCQztBQUVELGlDQUFpQztBQUNqQyxvRUFBb0U7QUFDcEUsa0JBQWtCIn0=