import { Component, OnInit } from '@angular/core';
import {AppDetails} from '../AppDetail';
import {AppdetailsService} from "../appdetails.service";
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';
@Component({
  selector: 'app-appdetails',
  templateUrl: './appdetails.component.html',
  styleUrls: ['./appdetails.component.css']
})
export class AppdetailsComponent implements OnInit {
   appdetailList:any;
   details:any;
title ="Cloud Orchestrator"
p:number=1
  constructor(private appDetailsService:AppdetailsService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.appDetailsService.getAppDetails().subscribe(res =>{ this.appdetailList= res;

  })


  }
  openAppId(details){
    let id=details.id
    this.route.navigate(['dashboard', id]);
  }
}
