import {Component} from '@angular/core';
import {Reviews} from '../state/reviews.state';
import {Store} from '@ngrx/store';
import {FileSelectEvent,} from 'primeng/fileupload';
import {addReview} from '../state/reviews.action';

@Component({
  selector: 'app-reviews-form',
  templateUrl: './reviews-form.component.html',
  styleUrls: ['./reviews-form.component.scss'],
})
export class ReviewsFormComponent {
  visible: boolean = false;
  file: File[] = [];

  newReview: Reviews = {
    userId: 4,
    title: '',
    description: '',
    rating_cxb: 0,
    rating_quality: 0,
    rating_price: 0,
    rating_overall: 0,
    timestamp: new Date().toISOString(),
    product_name: '',
    product_price: 0,
    product_image: undefined,
    categoryId: 1,
  };

  constructor(private store: Store) {
  }

  addReview() {
    console.log(this.newReview);
    if (!this.newReview) return;
    this.newReview.rating_overall = this.setOverallRating(
      this.newReview.rating_cxb,
      this.newReview.rating_quality,
      this.newReview.rating_price
    );
    this.store.dispatch(addReview({review: this.newReview}));
    this.visible = false;
  }

  setOverallRating(cxb: number, quality: number, price: number) {
    return (cxb + quality + price) / 3;
  }

  showDialog() {
    this.visible = true;
  }

  hideDialog() {
    this.visible = false;
  }

  async onUpload(event: FileSelectEvent) {
    this.newReview.product_image = await new Response(event.files[0]).text();
  }
}
