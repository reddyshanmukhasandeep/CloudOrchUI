import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from "@angular/common/http";
import {AppDetails} from "./AppDetail";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AppdetailsService {
  protocol  =window.location.protocol;
  host =window.location.hostname;
  url= this.protocol+"//"+this.host;
   
   

//getAppDetailsAPI:string = "http://localhost:8080/appdetails";
  constructor(private http:HttpClient) { }

  getAppDetails(){
    // console.log("protocal.."+this.protocol);
    //  console.log("host.."+ this.host);
     
    // console.log("url.."+this.url);
       
    return this.http.get("http://cloudorchestratordashboard.app.dev.digifabricpcf.com/appdetails");
    }
  getAppDetailsById(id){
      
    
    
      
      return this.http.get("http://cloudorchestratordashboard.app.dev.digifabricpcf.com/appdetails/"+id);
    
  }
}
