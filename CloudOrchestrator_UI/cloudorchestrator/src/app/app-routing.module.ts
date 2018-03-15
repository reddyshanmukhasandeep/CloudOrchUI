import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AppdetailsComponent} from './appdetails/appdetails.component';
import {AppmetadetailsComponent} from './appmetadetails/appmetadetails.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: AppdetailsComponent },
  {path:'dashboard/:id' ,component:AppmetadetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
