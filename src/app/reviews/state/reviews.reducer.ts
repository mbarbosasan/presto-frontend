import {initialState} from "./reviews.state";
import {createReducer, on} from "@ngrx/store";
import {
  addAllReview,
  addReview,
  getAllReviews,
  onCreateReviewFailure,
  onCreateReviewSuccess,
  removeReview
} from "./reviews.action";

export const ReviewsReducer = createReducer(
  initialState,
  on(getAllReviews, (state) => {
    return {
      ...state,
    }
  }),
  on(addReview, (state, {review}) => {
    return {
      ...state,
      reviews: [...state.reviews, review]
    }
  }),
  on(removeReview, (state, {review}) => {
    return {
      ...state,
      reviews: state.reviews.filter(item => item !== review)
    }
  }),
  on(addAllReview, (state, {reviews}) => {
    return {
      ...state,
      reviews: reviews
    }
  }),
  on(onCreateReviewSuccess, (state) => {
    return {
      ...state,
    }
  }),
  on(onCreateReviewFailure, (state, {error}) => {
    return {
      ...state,
      error: error
    }
  })
)
