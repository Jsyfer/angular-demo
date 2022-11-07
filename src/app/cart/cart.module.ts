import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartViewComponent } from './cart-view/cart-view.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CartViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CartModule { }
