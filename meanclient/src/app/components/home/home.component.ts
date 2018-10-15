import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'; //added  



declare var $:any;



@Component({

  selector: 'app-home',

  templateUrl: './home.component.html',

  styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit {



  myInterval = 500;

  showIndicator = false;

  noPause=false;



  constructor(private router:Router) { }



  ngOnInit() {      

  }



  onLoginClick(event:any){



    event.preventDefault();

    this.router.navigate(['/login']);

  }

  onRegisterClick(id){

  //scroll to the view

    let target=document.getElementById(id);

    target.style.display='block'

    target.scrollIntoView({ behavior: 'smooth' });



  }

  SubmitRegistration(event:any,id2){

    event.preventDefault();

    let target2=document.getElementById(id2);

    target2.scrollTop=0;

  }

  

}

 

  


