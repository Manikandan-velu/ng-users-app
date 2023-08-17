import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AddressComponent } from './components/address/address.component';
import { CompanyComponent } from './components/company/company.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { appRoutes } from './routerConfig';
import { UsersComponent } from './users/users.component';
import { MapComponent } from './components/map/map.component';
import { GoogleMapsModule } from "@angular/google-maps";


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    AddressComponent,
    CompanyComponent,
    CompanyDetailsComponent,
    UsersComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    GoogleMapsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
