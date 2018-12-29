import { Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";

import { map } from 'rxjs/operators';

 
@Injectable()

export class EmpServiceComponent
{
   private  _url:string ='./assets/apidata/employeedata.json';
    constructor(private http:Http)
    {}

    
    getAll()
    {
    return this.http.get(this._url).pipe(map((response:Response)=> response.json()))
        
    }
}
