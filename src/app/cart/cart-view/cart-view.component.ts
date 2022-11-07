import { Component, OnInit } from '@angular/core';
import { GoodsManageService } from 'src/app/shared/goods-manage.service';
import { Goods } from 'src/app/types/goods';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  currentGoodsList: { target: Goods; amount: number }[] = [];

  constructor(private goodsManageService: GoodsManageService) { }

  ngOnInit(): void {
    this.currentGoodsList = this.goodsManageService.getCurrentGoodsList();
  }

}
