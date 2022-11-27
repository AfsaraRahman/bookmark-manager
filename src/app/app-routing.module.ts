import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookmarkComponent } from '../app/add-bookmark/add-bookmark.component'
import { LandingPageComponent } from '../app/landing-page/landing-page.component'



const routes: Routes = [
  { path: '', component:  LandingPageComponent },
  { path: 'addbookmark', component: AddBookmarkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
