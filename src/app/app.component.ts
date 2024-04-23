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
isButtonDisabled:any=true;
responseArray:any=[];
responseText:any="";

  constructor(private http: HttpClient) {}
  clearText(){

    this.submitText="";
  

  };

  clearResponse(){
    this.responseText="";
    this.responseArray=[];
  }


  
  isLoading: boolean = false;

  sendMessage(message: string) {
    this.isButtonDisabled = true;
    this.isLoading = true;
    this.responseText = "";
    this.responseArray = [];
    this.http.post('https://altx-api.vercel.app/messag', { prompt: message }).subscribe((response: any) => {
      this.responseArray.push({
        type: 'response',
        message: response.message,
      });
      this.responseText = this.responseArray[0].message;
      this.isButtonDisabled = false;
      this.isLoading = false;
    });
  }
}
