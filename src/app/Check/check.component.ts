import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {ObjectService} from "../ObjestService/object.service"

@Component({
    selector:"my-check",
    templateUrl:"./check.component.html",
    styleUrls:["./check.component.css"]
})   


export class CheckComponent
{    
    selectedid;
    data=[];
    constructor(private activatedroute:ActivatedRoute, private router:Router, private objectservice:ObjectService)
    {
       activatedroute.params.subscribe((params)=> 
       
       this.selectedid=Number(params["vvv"])
       );  
       objectservice.getAll().subscribe((resdata) => this.data=resdata);

    }

    onPrevious()
    {
     this.router.navigate(["/check",this.selectedid-1]);
    }
    onNext()
    {
         this.router.navigate(["/check",this.selectedid+1]);
    }

    onHome()
    {
        this.router.navigate(["/emphome"]);
    }
}