import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { BuisnessComponent } from './buisness/buisness.component';
import { EntertaintmentComponent } from './entertaintment/entertaintment.component';
import { HealthComponent } from './health/health.component';
import { SportsComponent } from './sports/sports.component';
import { ScienceComponent } from './science/science.component';
import { GeneralComponent } from './general/general.component';
import { TechnologyComponent } from './technology/technology.component';
import { SearchnewsComponent } from './searchnews/searchnews.component';
// import { LoadingBarRouterModule } from '@ngx-loading-bar/router';


const routes: Routes = [
                        {path:'*', component:TopheadingComponent,pathMatch:'full'}, //if no route pge
                        {path:'',component:TopheadingComponent},//home
                        {path:'buisness',component:BuisnessComponent}, //bnuisness
                        {path:'entertainment',component:EntertaintmentComponent},//entertainment
                        {path:'health',component:HealthComponent},//health
                        {path:'sports',component:SportsComponent}, //sports
                        {path:'science',component:ScienceComponent},//scienvce
                        {path:'general',component:GeneralComponent},
                        {path:'technology',component:TechnologyComponent},
                        {path:'search',component:SearchnewsComponent}
                      


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
