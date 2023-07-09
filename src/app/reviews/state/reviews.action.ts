import {createAction, props} from "@ngrx/store";
import {Reviews} from "./reviews.state";

export const getAllReviews = createAction(
  '[Reviews] Get All Reviews',
)

export const addReview = createAction(
  '[Reviews] Add Review', props<{review: Reviews, file: Blob}>()
);

export const addAllReview = createAction(
  '[Reviews] Add All Review', props<{reviews: Reviews[]}>()
);

export const removeReview = createAction(
  '[Reviews] Remove Review', props<{review: Reviews}>()
);

export const onCreateReviewSuccess = createAction(
  '[Reviews] On Create Review Success'
);

export const onCreateReviewFailure = createAction(
  '[Reviews] On Create Review Failure', props<{error: any}>()
);
