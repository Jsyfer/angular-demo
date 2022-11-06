import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendDetailComponent } from './recommend-detail/recommend-detail.component';
import { SharedModule } from '../shared/shared.module';
import { RecommendService } from './recommend.service';



@NgModule({
  declarations: [
    RecommendDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers:[RecommendService]
})
export class RecommendModule { }
