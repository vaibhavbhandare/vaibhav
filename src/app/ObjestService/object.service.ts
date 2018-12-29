import {Injectable} from "@angular/core";
import {Http,Response,Headers} from "@angular/http";
import {map} from "rxjs/operators";
//import {HttpClient} from "@angular/common/http"


@Injectable()

export class ObjectService
{
   private url:string='/assets/apidata/object.json';
   constructor(private http:Http)
   {

   }
   
    getAll()
    {
         return this.http.get(this.url).pipe(map((res:Response)=> res.json()));
       // return this.httpclient.get(this.url).pipe(map((response:Response) => response.json()))
    }

    postUser(user)
    {
       return this.http.post('/assets/apidata/object.json',user).pipe(map((res:Response)=>{ 
          res.json();
       }));
    }
}