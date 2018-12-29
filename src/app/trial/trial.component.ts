import { Component} from '@angular/core';
import {Router} from "@angular/router";
import {ObjectService} from "../ObjestService/object.service"

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent 
 {

   user=
  {
   name:"",
   email:""
  }
     
   
  data:any=[];
  constructor(private router:Router,private objectservice:ObjectService)
  {
  objectservice.getAll().subscribe(resdata => {
    this.data=resdata
  });
  }

  onCheck(id:any)
  {
    this.router.navigate(["/check",id]);
  }

  onSubmit()
  {
    this.objectservice.postUser(this.user).subscribe(res=> 
      {
        this.data.unshift(this.user)
      })
  }
}
  
  
    
    
    

      
      
      
       
        
      
    
    
  


