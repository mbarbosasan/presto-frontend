export interface Reviews {
  userId: number;
  title: string;
  description: string;
  rating_cxb: number;
  rating_quality: number;
  rating_price: number;
  rating_overall: number;
  timestamp: string,
  product_name: string;
  product_price: number;
  product_image?: string;
  categoryId: number;
}

export interface ReviewsState {
  reviews: Reviews[];
  status?: 'success' | 'failure' | 'pending';
  error?: any;
}

export const initialState: ReviewsState = {
  reviews: [],
  status: undefined,
  error: undefined,
}
