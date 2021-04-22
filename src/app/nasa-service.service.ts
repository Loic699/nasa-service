import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { map } from  "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private service: HttpClient;
 
 

  constructor(param_service: HttpClient){
    this.service = param_service;
  }
  public getImageOfTheDay(): Observable<string>{
    const  obs1:Observable<any> = this.service.get("https://api.nasa.gov/planetary/apod?api_key=kuZ8avBtu0MP712BjzUXBg8UKJNBUEni9rfNMb0J");
    const  treatment  = ( param_data:any) => {
      return  param_data.url  as  string;
    };
    return  obs1.pipe( map( treatment) );
   
  }

  
  

}
