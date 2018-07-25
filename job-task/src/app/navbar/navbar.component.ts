import { Component, OnInit } from '@angular/core';
import { userslistService } from '../userslist.service';
userslistService


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public data : any;
  public userlist : any;
  public FinalData : any;
  public displaydata : boolean = false;
  public i : any;

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
