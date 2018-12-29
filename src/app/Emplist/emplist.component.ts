import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {EmpServiceComponent} from "../EmpService/emp.service"
@Component({
    selector:"my-list",
    templateUrl:"./emplist.component.html",
    styleUrls:['./emplist.component.css']
})
export class EmpListComponent
{

    data=[];
    

    constructor(private router:Router , private givedata:EmpServiceComponent)
    {
         givedata.getAll().subscribe(resempdata => this.data=resempdata);
    }

    onSubmit(id:number)
    {
       this.router.navigate(["/empdetail",id])
    }
}