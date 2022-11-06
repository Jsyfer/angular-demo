import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { SharedModule } from '../shared/shared.module';
import { GoodsService } from './goods.service';
import { GoodsDetailComponent } from './goods-detail/goods-detail.component';
import { GoodsPreviewComponent } from './goods-preview/goods-preview.component';



@NgModule({
  declarations: [
    GoodsListComponent,
    GoodsDetailComponent,
    GoodsPreviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers:[GoodsService]
})
export class GoodsModule { }
