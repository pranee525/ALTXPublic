import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'altex';
submitText:any="";
responseArray:any=[];
responseText:any="";

  constructor(private http: HttpClient) {}
  clearText(){
console.log("clear text");
    this.submitText="";


  };

  clearResponse(){
    this.responseText="";
    this.responseArray=[];
  }


  
  
  sendMessage(message: string) {
    this.http.post('https://altx-api.vercel.app/message', { prompt: message }).subscribe((response: any) => {
  
      this.responseArray.push({
        type: 'response',
        message: response.message,
      });
      this.responseText=this.responseArray[0].message;
    });


  }
}
