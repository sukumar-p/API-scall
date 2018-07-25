import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { registerService } from '../registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public email:any;
  public password:any;
  public gender:any;
  public name : any;
  public user : any;
  public userDetails : any;

  constructor(
    private route: Router,
    private Registraionservice : registerService
  ) { }

  ngOnInit() {
  }

  Register(){

    if(!this.email){
      alert("please enter email");
    }
    else if(!this.password){
      alert("enter password");
    }
    else if(!this.name){
      alert("enter mobile");
    }
    else if(!this.gender){
      alert("enter name");
    }
    else{
      this.user = {
        email : this.email,
        gender : this.gender,
        password : this.password,
        name:  this.name
      }
    };

    this.Registraionservice.registration(this.user)
        .subscribe(
          (response) =>{
            this.userDetails = response;
            console.log(response);
            if(this.userDetails.status){
              this.route.navigate(['/login'])
            }else{
              alert(this.userDetails.message);
            }
          }
        )
    
  }
}
