import {Component, Input, OnInit} from '@angular/core';
import {Reviews} from "../state/reviews.state";
import { Store } from '@ngrx/store';
import {removeReview} from "../state/actions/reviews.action";

@Component({
  selector: 'app-reviews-card',
  templateUrl: './reviews-card.component.html',
  styleUrls: ['./reviews-card.component.scss']
})
export class ReviewsCardComponent implements OnInit {
  @Input() review: Reviews | undefined;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    console.log(this.review)
  }

  removeReview(){
    if (!this.review) return;
    this.store.dispatch(removeReview({review: this.review}));
  }

}
