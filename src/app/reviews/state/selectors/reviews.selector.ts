import {ReviewsState} from "../reviews.state";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const featureKey = createFeatureSelector<ReviewsState>('reviews');

export const reviewsSelector = createSelector(
  featureKey,
  (state: ReviewsState) => state.reviews
)
