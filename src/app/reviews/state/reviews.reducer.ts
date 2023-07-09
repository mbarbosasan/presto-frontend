import {initialState} from "./reviews.state";
import {createReducer, on} from "@ngrx/store";
import {addReview, getAllReviews, onCreateReviewFailure, onCreateReviewSuccess, removeReview} from "./reviews.action";

export const ReviewsReducer = createReducer(
  initialState,
  on(getAllReviews, state => {
    return {
      ...state,
    }
  }),
  on(addReview, (state, {review}) => {
    return {
      ...state,
      reviews: [...state.reviewsState.reviews, review]
    }
  }),
  on(removeReview, (state, {review}) => {
    return {
      ...state,
      reviews: state.reviewsState.reviews.filter(item => item !== review)
    }
  }),
  on(onCreateReviewSuccess, state => {
    return {
      ...state,
      status: 'success',
    }
  }),
  on(onCreateReviewFailure, (state, {error}) => {
    return {
      ...state,
      status: 'failure',
      error: error,
    }
  })
)
