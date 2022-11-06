import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TextareaComponent } from './textarea/textarea.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    CardComponent,
    TextareaComponent,
    CounterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    CardComponent,
    TextareaComponent,
    CounterComponent
  ]
})
export class SharedModule { }
