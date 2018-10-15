import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'; //added  

import { Country } from '../../country'; //added

import { CountryService } from '../../shared/country.service'; //added



@Component({

  selector: 'app-navbar',

  templateUrl: './navbar.component.html',

  styleUrls: ['./navbar.component.css']

})

export class NavbarComponent implements OnInit {



  constructor(private router:Router,private countryService:CountryService) { }



  ngOnInit() {

  }

  newCountry(event:any){

    event.preventDefault();

    this.countryService.setter(new Country());



    /*navigate to the create update on clicking 'New'*/

    this.router.navigate(['/createUpdate']); 



  }

  onAboutClick(event:any){

    event.preventDefault();

    this.router.navigate(['/about']);

  }

  onHomeClick(event:any){

    event.preventDefault();

    this.router.navigate(['']);

  }



}
