import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})


export class LandingPageComponent implements OnInit {

  bookMarkTypes = [
    { 
      
      key: "Category A",

      children:[
        {
          title: "Javascript Tutorial",
          url: "www.javascript.com",
    
        },
        {
          title: "Javascript Tutorial2",
          url: "www.javascript2.com",
    
        },
        {
          title: "Javascript Tutorial3",
          url: "www.javascript3.com",
    
        }
      ]
     
  },
    { key : "Category B" ,
      children: [
        {
          title: "Food Tutorial",
          url: "www.Food.com",
    
        },
        {
          title: "Food Tutorial2",
          url: "www.Food2.com",
    
        },
        {
          title: "Food Tutorial3",
          url: "www.Food3.com",
    
        }
      ] 
  }
  ];

  showData;

  bookmarkType=null;


  constructor(
    private router: Router
  ) {

   }

   

  ngOnInit() {
    this.loadData();
  }

  loadData(){
  
    var data=localStorage.getItem('bookmarks');
   this.showData=JSON.parse(data);
    console.log(this.showData);
    for(let i of this.showData){
      if(this.bookMarkTypes==null){
        this.bookMarkTypes.push(i.category);
      }
      else if(!this.bookMarkTypes.includes==i.category){
        this.bookMarkTypes.push(i.category);
      }
      
    }
    console.log(this.bookMarkTypes);
 
  }

  gotoAddBookmark(){
    console.log("Clicking00");
    this.router.navigate(['/addbookmark']);
    //window.open('addbookmark');
  }

}
