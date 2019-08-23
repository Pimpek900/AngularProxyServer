import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsAdalAngular6Module, AuthenticationGuard} from 'microsoft-adal-angular6';
import { CookieService } from 'ngx-cookie-service';
import { UserInfoComponent } from './user-info/user-info.component';

export function getAdalConfig() {
  return {
      tenant: '23b1af9d-4459-465e-86c7-96a64dab5568',
      clientId: '49498562-1153-4cbe-a3ca-bcd4898006ed',
      redirectUri: window.location.origin,
      endpoints: { 
        "https://localhost/Api/": "xxx-bae6-4760-b434-xxx",
      },
      navigateToLoginRequestUrl: false,
      cacheLocation: 'localStorage',
    };
}


@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent
  ],
  imports: [
    MsAdalAngular6Module . forRoot ( getAdalConfig ) ,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [AuthenticationGuard,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
