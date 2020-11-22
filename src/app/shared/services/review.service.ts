import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  url = `/api/v1`;
  constructor(private http: HttpClient) { }

  createReview(review: Review) {
    return this.http.post(`${this.url}/review`, review);
  }
}
