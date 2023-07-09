import {isDevMode, NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';

import { StoreModule } from '@ngrx/store';
import {FormsModule} from "@angular/forms";
import { ReviewsFormComponent } from './reviews-form/reviews-form.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReviewsCardComponent } from './reviews-card/reviews-card.component';
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {RatingModule} from "primeng/rating";
import {FileUploadModule} from "primeng/fileupload";
import {InputNumberModule} from "primeng/inputnumber";
import {ReviewsReducer} from "./state/reviews.reducer";
import {EffectsModule} from "@ngrx/effects";
import {ReviewsEffects} from "./state/reviews.effects";
import {ReviewsRoutingModule} from "./reviews-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";


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
    ReviewsRoutingModule,
    StoreModule.forFeature('reviews', ReviewsReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
    EffectsModule.forFeature(ReviewsEffects),
    FormsModule,
    NgOptimizedImage,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    RatingModule,
    FileUploadModule,
    InputNumberModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class ReviewsModule { }
