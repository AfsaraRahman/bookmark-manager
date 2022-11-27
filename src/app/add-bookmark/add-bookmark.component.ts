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
  showdata:any;
  bookMarkTypes = [
  ];

  constructor(
   private _fb: FormBuilder,
    private router:Router
  ) { }

  ngOnInit() {

    this.setData();
    this.loadData();
    this.initFormgroup();
  }


  setData(){
    var data=[ {
      title: "Food Tutorial3",
      url: "www.Food3.com",
      category: "Category B"

    },
    {
      title: "Food Tutorial3",
      url: "www.Food3.com",
      category: "Category C"
      
    },
    {
      title: "Food Tutorial3",
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
  this.showdata=JSON.parse(data);
   console.log(this.showdata);
   for(let i of this.showdata){
    if(this.bookMarkTypes==null){
      this.bookMarkTypes.push(i.category);
    }
    else if(!this.bookMarkTypes.includes==i.category){
      this.bookMarkTypes.push(i.category);
    }
    
  }
  console.log(this.bookMarkTypes);

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

  createNewAdd(){
    console.log("bookmark added");
    const data = this.addBookmarkFormgroup.getRawValue();
    console.log(data);
    localStorage.setItem('bookmarks',JSON.stringify(data));

    this.router.navigateByUrl(``);
  }

  onChangeCategorySelect(event){
    console.log(event.value);
    this.selectedCategory=event.value;
  }


}
