import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { EmpListComponent } from './Emplist/emplist.component';
import { EmpDetailComponent } from './EmpDetail/empdetail.component';
import { EmpServiceComponent } from './EmpService/emp.service';
import { TrialComponent } from './trial/trial.component';
import { TDFComponent } from './TDF/tdf.component';
import { CheckComponent } from './Check/check.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ObjectService } from './ObjestService/object.service';


const route=[
  {path:"fb", redirectTo:"home" , pathMatch:"full"},
  {path:"home", component:HomeComponent},
{path:"login", component:LoginComponent},
{path:"detail", component:ListingPageComponent},
{path:"emplist" ,component:EmpListComponent},
{path:"empdetail/:abc" ,component:EmpDetailComponent},
{path:"trial", component:TrialComponent},
{path:"tdf" ,component:TDFComponent},
{path:"check/:vvv" ,component:CheckComponent},
{path:"emphome" ,component:TrialComponent},
{path:"**" , component:PageNotFoundComponent}];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    LoginComponent,
    ListingPageComponent,
    EmpListComponent,
    EmpDetailComponent,
    TrialComponent,
    TDFComponent,
    CheckComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,HttpClientModule,
    AppRoutingModule, RouterModule.forRoot(route)
  ],
  providers: [EmpServiceComponent,ObjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
