import {Component} from "@angular/core";

@Component({
    selector:"my-tdf",
    templateUrl:"./tdf.component.html",
    styleUrls:['./tdf.component.css']
})
export class TDFComponent
{
    
    submit(give:any)
    {
        console.log(give);
    }
}