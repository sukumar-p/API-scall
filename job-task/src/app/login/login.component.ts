import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServices } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    password: '',
    name: '',
    email: ''
  };

  public userdata: any;
  public data: any;

  constructor(
    private route: Router,
    private loginService: LoginServices
  ) { }

  ngOnInit() {
  }
  Login() {
    this.userdata = this.loginData;
    console.log(this.userdata);
    if (!this.userdata.email) {
      alert("Please Provide Email");
    } else if (!this.userdata.password) {
      alert("Please Provide Password");
    } else {
      this.loginService.login(this.userdata)
        .subscribe(
          (response) => {
            console.log(response);
            this.data = response;
            console.log(this.data);
            if (this.data.status) {

              this.route.navigate(['/userslist'])
            }
            else{
              alert("credentials are wrong");
            }

          }
        )



    }
  }
}
