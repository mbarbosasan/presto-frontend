import {RouterModule, Routes} from "@angular/router";
import {ReviewsListComponent} from "./reviews-list/reviews-list.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'reviews',
    pathMatch: 'full'
  },
  {
    path: 'reviews',
    component: ReviewsListComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
