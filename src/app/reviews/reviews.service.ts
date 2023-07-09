import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Reviews} from "./state/reviews.state";

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }

  createReview(review: Reviews) {
    return this.http.post("http://localhost:3000/reviews/create", review, {
      headers: {
        'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsInVzZXJuYW1lIjoiZW1haWwxQG1haWwuY29tIiwiaWF0IjoxNjg4ODcwMDYyLCJleHAiOjE2ODg4NzAxMjJ9.SyuXwdi9Ab-zodlu-aXS3FY56TUTlTL6cEAJxJgcprE"
      }
    });
  }
}
