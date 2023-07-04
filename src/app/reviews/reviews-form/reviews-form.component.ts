import { Component } from '@angular/core';
import {addReview} from "../state/actions/reviews.action";
import {Reviews} from "../state/reviews.state";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-reviews-form',
  templateUrl: './reviews-form.component.html',
  styleUrls: ['./reviews-form.component.scss']
})
export class ReviewsFormComponent {

  newReview: Reviews = {
    userId: 0,
    title: '',
    description: '',
    rating_cxb: 0,
    rating_quality: 0,
    rating_price: 0,
    rating_overall: 0,
    timestamp: '',
    product_name: '',
    product_price: 0,
    product_image: '',
    categoryId: 0,
  };

  constructor(private store: Store) {

  }

  addReview(){
    console.log(this.newReview)
    this.store.dispatch(addReview({review: this.newReview}));
  }
}
