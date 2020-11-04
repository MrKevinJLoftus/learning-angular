import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-write-review-form',
  templateUrl: './write-review-form.component.html',
  styleUrls: ['./write-review-form.component.scss']
})
export class WriteReviewFormComponent implements OnInit, OnDestroy {
  reviewForm!: FormGroup;
  $subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder) { }

  initForm() {
    this.reviewForm = this.fb.group({
      title: ['', Validators.required],
      rating: ['', Validators.required],
      comments: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.$subscription.unsubscribe();
  }

  /**
   * Subscribe to reviewForm value changes.
   */
  subscribeToReviewFormChanges() {
    this.$subscription.add(this.reviewForm.valueChanges.subscribe(
      (formValues) => {
        console.log(formValues);
      }
    ));
  }

}
