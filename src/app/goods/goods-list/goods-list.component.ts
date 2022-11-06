import { Component, OnInit } from '@angular/core';
import { Goods } from 'src/app/types/goods';
import { GoodsService } from '../goods.service';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {
  goodsList: Goods[] = []

  constructor(private GoodsService: GoodsService) { }

  ngOnInit(): void {
    this.GoodsService.getGoodsList().subscribe(goodsList => this.goodsList = goodsList);
  }

}
