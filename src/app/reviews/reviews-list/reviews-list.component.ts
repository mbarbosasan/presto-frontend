import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Reviews} from '../state/reviews.state';
import {reviewsSelector} from "../state/reviews.selector";

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss'],
})
export class ReviewsListComponent implements OnInit {
  reviewsList$: Observable<Reviews[]> | undefined;
  newReview: Reviews | undefined;
  visible: boolean = true;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.reviewsList$ = this.store.select(reviewsSelector);
  }

}
