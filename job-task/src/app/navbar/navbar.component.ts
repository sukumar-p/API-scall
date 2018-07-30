import { Component, OnInit } from '@angular/core';
import { userslistService } from '../userslist.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public data : any;
  public _id;
  public userlist : any;
  public FinalData : any;
  public displaydata : boolean = false;
  public i : any;

  constructor(
    private  UsersListservice : userslistService,
    private route : ActivatedRoute
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

  displayData(){
    this.UsersListservice.childUserlist()
   .subscribe(
      (response) => {
       this._id=response;
       console.log(this._id);
        
        
        // if(this.data.addDetails._id==params._id){
        //  this. displaydata=true;
        // }
        
      }
      
    )
  }

  
  
}
