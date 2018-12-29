import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {EmpServiceComponent} from "../EmpService/emp.service"
@Component({
    selector:"my-empdetail",
    templateUrl:"./empdetail.component.html",
    styleUrls:['./empdetail.component.css']
})
export class EmpDetailComponent
{
    selectedid;
    data=[];
    

    constructor(private activatedrouter:ActivatedRoute, private router:Router,private givedata:EmpServiceComponent)
    {      
        givedata.getAll().subscribe(resempdata => this.data=resempdata);
         activatedrouter.params.subscribe((params) =>
         {
             this.selectedid=Number(params["abc"]);
         });

       

    }
    onPrev()
    {
        this.router.navigate(["/empdetail",this.selectedid-1]) ;
    }
    onNext()
    {
        this.router.navigate(["/empdetail",this.selectedid+1]);
    }
}