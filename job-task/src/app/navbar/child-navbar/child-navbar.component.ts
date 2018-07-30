import { Component, OnInit } from '@angular/core';
import { userslistService } from '../../userslist.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-child-navbar',
  templateUrl: './child-navbar.component.html',
  styleUrls: ['./child-navbar.component.css']
})
export class ChildNavbarComponent implements OnInit {

    public data : any;
    public _id : any;
    public displaydata : boolean=false;
  constructor(
    // private  UsersListservice : userslistService,
    // private route : ActivatedRoute
  ) { }

  ngOnInit() {
    
    
  }

  

}
