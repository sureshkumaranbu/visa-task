import { Component } from '@angular/core';
import {HolidayService} from './holidays/holiday.service';

@Component({
    selector: 'my-app',
    template: `        
        <router-outlet></router-outlet>
    `,
    providers: [HolidayService]
})
export class AppComponent { }
