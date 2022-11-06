import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyDetailComponent } from './survey-detail/survey-detail.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SurveyDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SurveyModule { }
