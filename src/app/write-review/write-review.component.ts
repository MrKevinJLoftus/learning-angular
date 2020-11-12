import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Review } from '../review.model';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss']
})
export class WriteReviewComponent implements OnInit {
  review: Review;
  pageTitle = 'Write a Review';
  $subscription: Subscription = new Subscription();

  constructor() {}

  ngOnInit(): void { }

  onLogButtonClick() {

  }

  /**
   * Handle a dataUpdate event from the child form component.
   */
  handleReviewFormUpdate(updatedReview: Review) {
    this.review = updatedReview;
    console.log(this.review);
  }

}
