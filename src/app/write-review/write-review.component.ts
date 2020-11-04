import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss']
})
export class WriteReviewComponent implements OnInit {

  pageTitle = 'Write a Review';
  $subscription: Subscription = new Subscription();

  constructor() {}

  ngOnInit(): void { }

  /**
   * Handle logging button click.
   */
  onLogButtonClick() {
    // console.log(this.reviewForm.value);
  }



}
