import { createReducer, on } from '@ngrx/store';
import {initialState} from "../reviews.state";
import {addReview, getAllReviews, removeReview} from "../actions/reviews.action";

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
  })
)
