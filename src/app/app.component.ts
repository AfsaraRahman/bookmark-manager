import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BookmarkManager';
  
  constructor (
    private router: Router,
  ){}


}
