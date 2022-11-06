import { Component, OnInit } from '@angular/core';
import { Goods } from 'src/app/types/goods';
import { RecommendService } from '../recommend.service';

@Component({
  selector: 'app-recommend-detail',
  templateUrl: './recommend-detail.component.html',
  styleUrls: ['./recommend-detail.component.css']
})
export class RecommendDetailComponent implements OnInit {
  goodsList: Goods[] = []

  constructor(private recommendService: RecommendService) { }

  ngOnInit(): void {
    this.recommendService.getGoodsList().subscribe(goodsList => this.goodsList = goodsList);
  }

}
