import {createAction, props} from "@ngrx/store";
import {Reviews} from "../reviews.state";

export const getAllReviews = createAction(
  '[Reviews] Get All Reviews',
)

export const addReview = createAction(
  '[Reviews] Add Review', props<{review: Reviews}>()
);

export const removeReview = createAction(
  '[Reviews] Remove Review', props<{review: Reviews}>()
);
