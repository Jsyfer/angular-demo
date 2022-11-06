import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
  declarations: [
    CardComponent,
    TextareaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    CardComponent,
    TextareaComponent
  ]
})
export class SharedModule { }
