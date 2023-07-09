import {Actions, createEffect, ofType} from "@ngrx/effects";
import {addReview, onCreateReviewFailure, onCreateReviewSuccess} from "./reviews.action";
import {catchError, exhaustMap, map, of} from "rxjs";
import {ReviewsService} from "../reviews.service";
import {Injectable} from "@angular/core";
@Injectable()
export class ReviewsEffects {
  createReview$ = createEffect(() => this.actions$.pipe(
    ofType(addReview),
    exhaustMap((review) => this.reviewsService.createReview(review.review)
      .pipe(
        map(() => (onCreateReviewSuccess())),
        catchError((error) => of(onCreateReviewFailure({error})))
      ))
  ))
  constructor(private actions$: Actions, private reviewsService: ReviewsService) {}
}
