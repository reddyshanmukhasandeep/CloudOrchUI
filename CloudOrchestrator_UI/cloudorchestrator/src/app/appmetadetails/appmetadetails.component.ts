import { Component, OnInit } from '@angular/core';
import { AppdetailsService } from "../appdetails.service";
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';
import { AppDetails } from '../AppDetail';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-appmetadetails',
  templateUrl: './appmetadetails.component.html',
  styleUrls: ['./appmetadetails.component.css']
})
export class AppmetadetailsComponent implements OnInit {
  id: number;
  p:number=1
   appMetaDetails:any;
   appMetaDetailsLogList:any
   title ="Cloud Orchestrator"
  constructor(private appDetailsService: AppdetailsService,
    private route: ActivatedRoute,
    private router: Router) 
    {
      this.route.params.subscribe(params => {
                                         this.id = params['id'];
                                      }
  
      )
      // this.appDetailsService.getAppDetailsById(this.id).subscribe(res => {this.appMetaDetails = res;
       
        
        
        
        
      //   console.log(this.appMetaDetails);
      // });
    
    }



  ngOnInit() {
     console.log(this.id);
    
    this.appDetailsService.getAppDetailsById(this.id).subscribe(res => {this.appMetaDetails = res
    this.appMetaDetailsLogList = this.appMetaDetails.logs
      console.log(this.appMetaDetails);
     });
  
    
    
    
  }

}
