import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {
  addBookmarkFormgroup: FormGroup;
  selectedCategory:string|"";
  defaultCategory:boolean|false;
  showdata;
  bookMarkTypes=[];
  received;

  constructor(
   private _fb: FormBuilder,
    private router:Router
  ) { }

  ngOnInit() {

   //this.setData();
    //localStorage.clear();
    this.loadData();
    this.initFormgroup();
  }


  setData(){
    var data=[ {
      title: "Javascript tutorial",
      url: "www.Food3.com",
      category: "Category B"

    },
    {
      title: "Food Tutorial juice",
      url: "www.Food3.com",
      category: "Category C"
      
    },
    {
      title: "Food Tutorial burger",
      url: "www.Food3.com",
      category: "Category A"
    },
    {
      title: "Food Tutorial3",
      url: "www.Food3.com",
      category: "Category B"
    }
  ];
    localStorage.setItem('bookmarks',JSON.stringify(data));
  }

 loadData(){
  
  var data=localStorage.getItem('bookmarks');
  if(data==null){
    this.showdata=[];
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

  initFormgroup(){
    this.addBookmarkFormgroup = this._fb.group({
      title: new FormControl("", [
         Validators.required,
         Validators.maxLength(50)
      ]),
      category: new FormControl( "",                      [
        Validators.required,
      ]),
      url: new FormControl("", 
      [
        Validators.required,
      ]),
  })
  }

  get FormErrors () {
    return this.addBookmarkFormgroup.controls;
  }

  hasError (FormControl: AbstractControl) {
    return FormControl.errors && (FormControl.touched || FormControl.dirty);
  }

  addnewCategory(){
    console.log("working");
    this.defaultCategory=true;

  }

  gotoPrevious(){
    this.router.navigateByUrl(``);
  }

  newBookmarkAdd(){
    const data = this.addBookmarkFormgroup.getRawValue();
    this.received.push(data);
    console.log("***", this.received);
    localStorage.setItem('bookmarks',JSON.stringify(this.received));
   // console.log(data);
    
    alert("bookmark added");

    //this.router.navigateByUrl(``);
  }

  onChangeCategorySelect(event){
    console.log(event.value);
    this.selectedCategory=event.value;
  }


}
