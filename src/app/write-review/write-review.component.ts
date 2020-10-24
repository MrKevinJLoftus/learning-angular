import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss']
})
export class WriteReviewComponent implements OnInit {

  reviewForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      title: ['', Validators.required],
      rating: ['', Validators.required],
      comments: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
