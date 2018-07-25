import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { SidebarModule } from 'ng-sidebar';




import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { registerService } from './registration.service';
import { LoginServices } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { UserslistComponent } from './userslist/userslist.component';
import { userslistService } from './userslist.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ChildNavbarComponent } from './navbar/child-navbar/child-navbar.component';


const routes :  Routes=([
  {path : "registration", component : RegistrationComponent},
  {path : '', redirectTo : 'registration', pathMatch : 'full'},
  {path : "login", component : LoginComponent},
  {path : "userslist", component : UserslistComponent},
  {path : "navbar", component : NavbarComponent, children : [
    { path: ':_id' , component:ChildNavbarComponent }
  ]},
   
])


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    UserslistComponent,
    NavbarComponent,
    ChildNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    SidebarModule.forRoot()
  ],
  providers: [registerService,LoginServices,userslistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
