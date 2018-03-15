import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import  {AppdetailsService}  from "./appdetails.service";
import { AppComponent } from './app.component';
import { AppdetailsComponent } from './appdetails/appdetails.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { HeaderComponent } from './header/header.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppmetadetailsComponent } from './appmetadetails/appmetadetails.component';
import { ToDatePipe } from './to-date.pipe';
@NgModule({
  declarations: [
    AppComponent,
    AppdetailsComponent,
    HeaderComponent,
    AppmetadetailsComponent,
    ToDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    NgxPaginationModule
  ],
  providers: [AppdetailsService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
