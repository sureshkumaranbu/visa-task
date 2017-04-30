import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import {HolidayListComponent} from './holidays/holiday-list.component';
import { HolidayDetailComponent } from "./holidays/holiday-detail.component";

@NgModule({
  imports: [ BrowserModule, 
            HttpModule,
            RouterModule.forRoot([
            { path: 'holidays', component: HolidayListComponent },
            { path: 'holidays/:id', component: HolidayDetailComponent },
            { path: '', redirectTo: 'holidays', pathMatch: 'full' },
            { path: '**', redirectTo: 'holidays', pathMatch: 'full' }
          ])
     ],
  declarations: [ AppComponent, HolidayListComponent, HolidayDetailComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { } 
