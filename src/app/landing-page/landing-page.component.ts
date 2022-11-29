import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})


export class LandingPageComponent implements OnInit {
  
  showdata;
  bookMarkTypes=[];
  received;


  constructor(
    private router: Router
  ) {}

   

  ngOnInit() {

    this.loadData();
  }


  loadData(){
  
    var data=localStorage.getItem('bookmarks');
    if(data==null){
      this.received=[];
    }
    else{
      this.received=JSON.parse(data);
      var key=Object.keys(this.received);
      key.forEach((key, index) => {
        console.log(key, ":", this.received[key].category);
        if(!this.bookMarkTypes.includes( this.received[key].category)){
               this.bookMarkTypes.push(this.received[key].category);
          }
      });
    console.log(this.bookMarkTypes);
  
   }
  }

  specifictype(type){
    return this.received.filter(x => x.category == type);
  }

  gotoAddBookmark(){
    console.log("Clicking00");
    this.router.navigate(['/addbookmark']);
    //window.open('addbookmark');
  }

}
