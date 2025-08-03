import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-goods-detail',
  templateUrl: './goods-detail.component.html',
  styleUrls: ['./goods-detail.component.css']
})
export class GoodsDetailComponent implements OnInit {
  @Input() id: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
