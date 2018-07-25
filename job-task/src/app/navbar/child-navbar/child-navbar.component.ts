import { Component, OnInit } from '@angular/core';
import { userslistService } from '../../userslist.service';


@Component({
  selector: 'app-child-navbar',
  templateUrl: './child-navbar.component.html',
  styleUrls: ['./child-navbar.component.css']
})
export class ChildNavbarComponent implements OnInit {

    public data : any;
    public _id : any;
  constructor(
    private  UsersListservice : userslistService
  ) { }

  ngOnInit() {
    this.UsersListservice.userslist()
    .subscribe(
      (response) => {
        console.log(response);
        this.data = response;
        
        console.log(this.data);
        

      }
    )
  }

}
