import { Component, OnInit } from '@angular/core';
import { GoodsManageService } from '../shared/goods-manage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  totalAmount: number = 0;

  constructor(private goodsManageService: GoodsManageService) {}

  ngOnInit(): void {
    this.goodsManageService.getTotalAmount().subscribe((amount) => {
      this.totalAmount = amount;
    });
  }
}
