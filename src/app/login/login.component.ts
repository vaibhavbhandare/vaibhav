import { Component } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  uemail;
  upwd;
  oemail="vaibhavbhandare31@gmail.com";
  opwd="8625973996";

  constructor(private router:Router)
  {

  }
  onSubmit()
  {
    let obj:{};
    if(this.uemail==this.oemail)
    {
               if(this.upwd==this.opwd)
               {
                   this.router.navigate(["/detail"]);
               }
               else
               {
                 console.log("Invalid UserName")
               }
    }
    else
               {
                 console.log("In valid UserName And Password")
               }
               return obj;
  }
    
}
