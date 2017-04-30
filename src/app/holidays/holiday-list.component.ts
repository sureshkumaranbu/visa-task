import {Component, OnInit} from '@angular/core';
import {HolidayService} from './holiday.service';
@Component({
    templateUrl: "app/holidays/holiday-list.component.html"
})
export class HolidayListComponent implements OnInit {    
    pageTitle: string = 'Holidays List';
    errorMessage: string;
    holidays: any[];
    result: any[];

    constructor(private _holidayService: HolidayService){

    }
   ngOnInit(): void {
        this._holidayService.getHolidays()
        .subscribe(holidays => this.holidays = cback(holidays),
                    error => this.errorMessage = <any>error);
        function cback(data: any){
            let a = data;
            let result = []
            for(var i in a.holidays)
            result.push({"date": i, "description": a.holidays[i][0].name})
            console.log(result);
            return result;
        }
    }     
        
 }
