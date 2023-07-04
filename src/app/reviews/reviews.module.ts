import {isDevMode, NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';

import { StoreModule } from '@ngrx/store';
import {ReviewsReducer} from "./state/reducers/reviews.reducer";
import {FormsModule} from "@angular/forms";
import { ReviewsFormComponent } from './reviews-form/reviews-form.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReviewsCardComponent } from './reviews-card/reviews-card.component';


@NgModule({
  declarations: [
    ReviewsListComponent,
    ReviewsFormComponent,
    ReviewsCardComponent
  ],
  exports: [
    ReviewsListComponent
  ],
    imports: [
        CommonModule,
        StoreModule.forFeature('reviews', ReviewsReducer),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: !isDevMode(),
        }),
        FormsModule,
        NgOptimizedImage,
    ]
})
export class ReviewsModule { }
