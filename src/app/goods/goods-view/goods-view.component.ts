import { Component, OnInit } from '@angular/core';
import { Goods } from 'src/app/types/goods';
import { GoodsService } from '../goods.service';

@Component({
  selector: 'app-goods-view',
  templateUrl: './goods-view.component.html',
  styleUrls: ['./goods-view.component.css']
})
export class GoodsViewComponent implements OnInit {
  goodsList: Goods[] = []

  constructor(private GoodsService: GoodsService) { }

  ngOnInit(): void {
    this.GoodsService.getGoodsList().subscribe(goodsList => this.goodsList = goodsList);
  }

}
