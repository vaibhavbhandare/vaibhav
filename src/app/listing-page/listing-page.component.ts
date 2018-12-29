import { Component} from '@angular/core';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent  {

  data=[{empid:1 , name:"vaibhav", roll:"Angular Developer",dob:new Date("10/31/1995"),salary:50000},
  {empid:2 , name:"Sandeep", roll:"Java Developer",dob:new Date("1/3/1995"),salary:80000},
  {empid:3 , name:"Atul", roll:"C++ Developer",dob:new Date("8/1/1995"),salary:60000},
  {empid:4 , name:"Shivanand", roll:"Full stack Developer",dob:new Date("5/11/1995"),salary:55000},
  {empid:5, name:"Vijaya", roll:"MEAN Developer",dob:new Date("7/15/1995"),salary:35000}];
}
