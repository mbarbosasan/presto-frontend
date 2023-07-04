import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Reviews} from '../state/reviews.state';
import {reviewsSelector} from '../state/selectors/reviews.selector';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss'],
})
export class ReviewsListComponent implements OnInit {
  reviewsList$: Observable<Reviews[]> | undefined;
  newReview: Reviews | undefined;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.newReview = {
      userId: 0,
      title: 'Melhor óculos que já comprei',
      description:
        'Com certeza foi um dos melhores óculos que comprei, o preço talvez seja um pouco alto mas valeu cada centavo, não me arrependo de nada e compraria de novo!',
      rating_cxb: 1,
      rating_quality: 2,
      rating_price: 3,
      rating_overall: 4,
      timestamp: '',
      product_name: 'Óculos de sol "Tovenunada"',
      product_price: 0,
      product_image: '',
      categoryId: 0,
    };
    this.reviewsList$ = this.store.select(reviewsSelector);
  }
}
