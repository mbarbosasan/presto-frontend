import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ReviewsState} from "./reviews.state";

export const featureKey = createFeatureSelector<ReviewsState>('reviews');

export const reviewsSelector = createSelector(
  featureKey,
  (state: ReviewsState) => state.reviews
)

export const statusSelector = createSelector(
  featureKey,
  (state: ReviewsState) => {
    return {
      status: state.status,
      error: state.error,
    }
  }
)
