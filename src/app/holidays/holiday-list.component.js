"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var holiday_service_1 = require("./holiday.service");
var HolidayListComponent = (function () {
    function HolidayListComponent(_holidayService) {
        this._holidayService = _holidayService;
        this.pageTitle = 'Holidays List';
    }
    HolidayListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._holidayService.getHolidays()
            .subscribe(function (holidays) { return _this.holidays = cback(holidays); }, function (error) { return _this.errorMessage = error; });
        function cback(data) {
            var a = data;
            var result = [];
            for (var i in a.holidays)
                result.push({ "date": i, "description": a.holidays[i][0].name });
            console.log(result);
            return result;
        }
    };
    return HolidayListComponent;
}());
HolidayListComponent = __decorate([
    core_1.Component({
        templateUrl: "app/holidays/holiday-list.component.html"
    }),
    __metadata("design:paramtypes", [holiday_service_1.HolidayService])
], HolidayListComponent);
exports.HolidayListComponent = HolidayListComponent;
//# sourceMappingURL=holiday-list.component.js.map