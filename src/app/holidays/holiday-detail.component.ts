import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    templateUrl: 'app/holidays/holiday-detail.component.html'
})
export class HolidayDetailComponent implements OnInit {
    dateDescri: string;
    description: any;
    pageTitle: string = "Holiday detail";

    constructor(private _route: ActivatedRoute,
                private _router: Router){
    }

     ngOnInit(): void{
         this.description = this._route.snapshot.params;     
         this.dateDescri = this.description.id;
     }

     onBack(): void {
         this._router.navigate(['/holidays']);
     }
}