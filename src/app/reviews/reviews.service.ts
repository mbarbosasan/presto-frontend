import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Reviews} from "./state/reviews.state";

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }

  createReview(review: Reviews, file: Blob) {
    const formData = new FormData()
    formData.append('file', file, "product_image.png")
    formData.append('review', JSON.stringify(review))
    return this.http.post("http://localhost:3000/reviews/create", formData);
  }
}
