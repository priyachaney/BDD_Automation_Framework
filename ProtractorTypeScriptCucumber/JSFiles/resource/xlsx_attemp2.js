"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xlsx_attemp2 = void 0;
var XLSX = require('xlsx');
class xlsx_attemp2 {
    read_from_excel(sheetName, filePath) {
        let workbook = XLSX.readFile('filePath');
        let worksheet = workbook.Sheets['sheetName'];
        let a = XLSX.utils.sheet_to_json(worksheet);
        return a;
    }
}
exports.xlsx_attemp2 = xlsx_attemp2;
module.exports = new xlsx_attemp2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeF9hdHRlbXAyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcmVzb3VyY2UveGxzeF9hdHRlbXAyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixNQUFhLFlBQVk7SUFFckIsZUFBZSxDQUFDLFNBQWEsRUFBQyxRQUFZO1FBRXRDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekMsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsQ0FBQztJQUViLENBQUM7Q0FHSjtBQVpELG9DQVlDO0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLFlBQVksQ0FBQSJ9