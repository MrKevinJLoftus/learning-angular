import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Review } from 'src/app/shared/models/review.model';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss']
})
export class WriteReviewComponent implements OnInit {
  reviewData: Review;
  pageTitle = 'Write a Review';
  reviewForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.reviewForm = this.fb.group({
      title: ['', Validators.required],
      rating: ['', [Validators.required, Validators.pattern(/\d+/)]],
      comments: ['', Validators.required]
    });
  }

  /**
   * Handle updates to the rating from child component.
   * @param newRating - numerical rating coming as OutPut
   */
  handleRatingChange(newRating: number) {
    this.reviewForm.controls.rating.setValue(newRating);
  }

}
