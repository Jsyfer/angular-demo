import { Component, Input, OnInit } from '@angular/core';
import { GoodsManageService } from 'src/app/shared/goods-manage.service';
import { Goods } from 'src/app/types/goods';

@Component({
  selector: 'app-goods-preview',
  templateUrl: './goods-preview.component.html',
  styleUrls: ['./goods-preview.component.css']
})
export class GoodsPreviewComponent implements OnInit {
  @Input() goods: Goods = {
    id: 0,
    name: '',
    imgUrl: '',
    description: '',
  };
  count: number = 0;
  constructor(private goodsManagerService: GoodsManageService) {}

  ngOnInit(): void {}

  getCount(count: number) {
    this.count = count;
    this.goodsManagerService.setCurrentGoodsList(this.goods,count)
  }
}
