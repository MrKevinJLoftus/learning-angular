import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiGetReviewsResponse, Review } from '../models/review.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  url = `/api/v1`;
  constructor(private http: HttpClient) { }

  createReview(review: Review) {
    return this.http.post(`${this.url}/review`, review);
  }

  /**
   * Fetch all review records from the database.
   */
  getReviews(): Observable<Review[]> {
    return this.http.get<ApiGetReviewsResponse>(`${this.url}/review`).pipe(map((res) => res.reviews.map(r => new Review(r))));
  }
}
