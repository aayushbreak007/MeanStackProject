import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //added
import { Country } from '../../country'; //added
import { CountryService } from '../../shared/country.service'; //added










@Component({

  selector: 'app-create-update',

  templateUrl: './create-update.component.html',

  styleUrls: ['./create-update.component.css']

})

export class CreateUpdateComponent implements OnInit {



  private country:Country;

  constructor(private countryService:CountryService,private router:Router) { }



  ngOnInit() {

    this.country=this.countryService.getter();//in case of the edit

  }

  createOrUpdate(){



   

    if(this.country._id==undefined){//we are creating a new country

    this.countryService.createCountry(this.country).subscribe(

      data=>{

        console.log(data);

        this.router.navigate(['/']);

      },

      error=>{

        console.log(error);

      }

    )

  }else{

    //updating the existing country

    this.countryService.updateCountry (this.country).subscribe(

      data=>{

        console.log(data);

        this.router.navigate(['/']);

      },

      error=>{

        console.log(error);

      }

    )

  }

}



}
