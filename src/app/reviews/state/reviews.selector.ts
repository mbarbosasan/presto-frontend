import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ReviewsState} from "./reviews.state";

export const featureKey = createFeatureSelector<ReviewsState>('reviews');

export const reviewsSelector = createSelector(
  featureKey,
  (state: ReviewsState) => state.reviews
)
