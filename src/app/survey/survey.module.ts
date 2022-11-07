import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SurveyViewComponent } from './survey-view/survey-view.component';



@NgModule({
  declarations: [
    SurveyViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SurveyModule { }
