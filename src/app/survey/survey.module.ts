import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SurveyViewComponent } from './survey-view/survey-view.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SurveyViewComponent }
];

@NgModule({
  declarations: [
    SurveyViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SurveyModule { }
