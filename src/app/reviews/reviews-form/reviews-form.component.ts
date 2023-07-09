import {Component, OnInit} from '@angular/core';
import {Reviews} from '../state/reviews.state';
import {Store} from '@ngrx/store';
import {FileSelectEvent,} from 'primeng/fileupload';
import {addReview} from '../state/reviews.action';
import {statusSelector} from "../state/reviews.selector";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-reviews-form',
  templateUrl: './reviews-form.component.html',
  styleUrls: ['./reviews-form.component.scss'],
})
export class ReviewsFormComponent implements OnInit {
  visible: boolean = false;
  file: Blob = new Blob();
  status$ = this.store.select(statusSelector);

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
    categoryId: 1,
  };

  constructor(private store: Store, private messageService: MessageService) {
  }

  ngOnInit() {
    this.status$.subscribe(({status, error}) => {
      if (status === 'success') {
       return this.messageService.add({severity:'success', summary: 'Success', detail: 'Review added successfully'});
      } else if (status === 'failure') {
        return this.messageService.add({severity:'error', summary: 'Error', detail: 'Review failed to add. Stacktrace: ' + error});
      }
    })
  }

  addReview() {
    console.log(this.newReview);
    if (!this.newReview) return;
    this.newReview.rating_overall = this.setOverallRating(
      this.newReview.rating_cxb,
      this.newReview.rating_quality,
      this.newReview.rating_price
    );
    this.store.dispatch(addReview({review: this.newReview, file: this.file}));
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
    this.file = event.files[0];
  }


}
