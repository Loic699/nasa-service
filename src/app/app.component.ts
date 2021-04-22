import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'laNaza';


 public imgOfTheDay: string = "";

constructor (public service: NasaService){

}

public  ngOnInit():void{
  this.service.getImageOfTheDay().subscribe(
      (param_url:string) => {
          this.imgOfTheDay =  param_url;
      }
  );
}


}
