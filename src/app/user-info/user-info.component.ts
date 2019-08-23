import { Component, OnInit } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userName = this.adalSvc.LoggedInUserName
  userEmail = this.adalSvc.LoggedInUserEmail

  constructor(private adalSvc: MsAdalAngular6Service) { }

  ngOnInit() {
  }

}
