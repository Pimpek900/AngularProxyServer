import { Component, OnInit } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //zmienne 
  newadalsvc: MsAdalAngular6Service;
  posts: any; //wartość zwracana z OnInit()
  
// Logowanie do Microsoft
  constructor(private adalSvc: MsAdalAngular6Service, private http: HttpClient){
    if (!this.adalSvc.userInfo) {
      this.adalSvc.login(); 
    }
  }
//Wylogowywanie z Microsoft
  onClickMe() {
    this.adalSvc.logout() 
    console.log("logout()")
  }
  
  ngOnInit(){
    this.posts = this.http.get('/api').subscribe(data=>{
      console.log(data);
    })
  }
}
