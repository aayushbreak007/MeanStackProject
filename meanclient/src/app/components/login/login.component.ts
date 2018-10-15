import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //added  




@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit {



  constructor(private router:Router) { }



  ngOnInit() {

  }



  onGoBack(event:any){

    event.preventDefault();

    this.router.navigate(['/']);

  }



}
