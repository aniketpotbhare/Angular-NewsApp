import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import{HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { NewsapiService } from './Service/newsapi.service';
import { BuisnessComponent } from './buisness/buisness.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { EntertaintmentComponent } from './entertaintment/entertaintment.component';
import { GeneralComponent } from './general/general.component';
// import Aos from 'aos';
import * as Aos from 'aos';
import { TechnologyComponent } from './technology/technology.component';
import { SearchnewsComponent } from './searchnews/searchnews.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';


@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    BuisnessComponent,
    HealthComponent,
    ScienceComponent,
    SportsComponent,
    EntertaintmentComponent,
    GeneralComponent,
    TechnologyComponent,
    SearchnewsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    FormsModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
