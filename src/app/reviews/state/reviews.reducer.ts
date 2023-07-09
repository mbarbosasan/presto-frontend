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
      reviews: [...state.reviews, review]
    }
  }),
  on(removeReview, (state, {review}) => {
    return {
      ...state,
      reviews: state.reviews.filter(item => item !== review)
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
