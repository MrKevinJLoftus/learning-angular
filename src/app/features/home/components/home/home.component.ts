import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Review } from 'src/app/shared/models/review.model';
import { ReviewService } from 'src/app/shared/services/review.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filterInput = new FormControl('');
  $subscription = new Subscription();
  reviews: Review[] = [];
  filteredReviews: Review[] = [];

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.getReviews();
    this.inputChangeHandler();
  }

  /**
   * Handle changes to the filterInput control.
   */
  inputChangeHandler(): void {
    this.$subscription.add(this.filterInput.valueChanges.subscribe(
      (input) => {
        this.filteredReviews = this.reviews.filter((review) => review.title.toLowerCase().includes(input.toLowerCase()));
      }
    ));
  }

  /**
   * Fetch all reviews from the database.
   */
  getReviews(): void {
    this.$subscription.add(this.reviewService.getReviews().subscribe(
      (res) => {
        this.reviews = res;
      }
    ));
  }
}
