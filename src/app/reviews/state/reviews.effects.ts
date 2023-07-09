import {Actions, createEffect, ofType} from "@ngrx/effects";
import {addAllReview, addReview, getAllReviews, onCreateReviewFailure, onCreateReviewSuccess} from "./reviews.action";
import {catchError, exhaustMap, map, of} from "rxjs";
import {ReviewsService} from "../reviews.service";
import {Injectable} from "@angular/core";
@Injectable()
export class ReviewsEffects {
  constructor(private actions$: Actions, private reviewsService: ReviewsService) {}


  createReview$ = createEffect(() => this.actions$.pipe(
    ofType(addReview),
    exhaustMap(({review, file}) => this.reviewsService.createReview(review, file)
      .pipe(
        map(() => (onCreateReviewSuccess())),
        catchError((error) => of(onCreateReviewFailure(error)))
      ))
  ))

  getallReviews$ = createEffect(() => this.actions$.pipe(
    ofType(getAllReviews),
    exhaustMap(() => this.reviewsService.getAllReviews()
      .pipe(
        map((reviews) => (addAllReview({reviews: reviews}))),
        catchError((error) => of(onCreateReviewFailure(error)))
      ))
  ))
}
