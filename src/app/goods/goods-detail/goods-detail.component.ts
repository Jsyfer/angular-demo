import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GoodsManageService } from 'src/app/shared/goods-manage.service';
import { Goods } from 'src/app/types/goods';

@Component({
  selector: 'app-goods-detail',
  templateUrl: './goods-detail.component.html',
  styleUrls: ['./goods-detail.component.css'],
})
export class GoodsDetailComponent implements OnInit{
  @Input() goods: Goods = {
    id: 0,
    name: '',
    imgUrl: '',
    description: '',
  };
  constructor(private goodsManagerService: GoodsManageService) {}

  ngOnInit(): void {}

  getCount(count: number) {
    this.goodsManagerService.setCurrentGoodsList(this.goods,count)
  }
}
