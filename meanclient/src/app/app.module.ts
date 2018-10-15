/*Module Imports */

import { HttpClientModule } from '@angular/common/http'; //added

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; //added

import { BrowserModule } from '@angular/platform-browser';

/*angular animations */

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router'; //added

/*Image Carousel */

import { CarouselModule } from 'ngx-bootstrap';

/*Components Imports */

import { AppComponent } from './app.component';

import { AboutComponent } from './components/about/about.component'; //added service class a provider

import { CreateUpdateComponent } from './components/create-update/create-update.component';

import { HomeComponent } from './components/home/home.component';

import { ListComponent } from './components/list/list.component';

import { LoginComponent } from './components/login/login.component';

import { NavbarComponent } from './components/navbar/navbar.component';

import { CountryService } from './shared/country.service';









//creating routes

const appRoutes:Routes=[

  {path:'',component:HomeComponent},//default route

  {path:'about',component:AboutComponent},

  {path:'login',component:LoginComponent}

  //{path:'read',component:ListComponent},//default route

 // {path:'createUpdate',component:CreateUpdateComponent}//create-update route

]



@NgModule({

  declarations: [

    AppComponent,

    CreateUpdateComponent,

    ListComponent,

    NavbarComponent,

    AboutComponent,

    LoginComponent,

    HomeComponent

  ],

  imports: [

    BrowserModule,

    HttpClientModule,

    FormsModule,

    RouterModule.forRoot(appRoutes),

    //ngx-bootstrap

    CarouselModule.forRoot(),

    //routing animation

    BrowserAnimationsModule

 

  ],

  providers: [CountryService],

  bootstrap: [AppComponent]

})

export class AppModule { }
