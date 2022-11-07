import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsViewComponent } from './goods-view/goods-view.component';
import { SharedModule } from '../shared/shared.module';
import { GoodsService } from './goods.service';
import { GoodsPreviewComponent } from './goods-preview/goods-preview.component';



@NgModule({
  declarations: [
    GoodsViewComponent,
    GoodsPreviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers:[GoodsService]
})
export class GoodsModule { }
