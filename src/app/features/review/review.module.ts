import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteReviewComponent } from './components/write-review/write-review.component';
import { WriteReviewFormComponent } from './components/write-review-form/write-review-form.component';
import { PreviewReviewComponent } from './components/preview-review/preview-review.component';

@NgModule({
  declarations: [
    WriteReviewComponent,
    WriteReviewFormComponent,
    PreviewReviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReviewModule { }
