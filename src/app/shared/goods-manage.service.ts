import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Goods } from '../types/goods';

@Injectable({
  providedIn: 'root',
})
export class GoodsManageService {
  currentGoodsList: { target: Goods; amount: number }[] = [];
  totalAmount: number = 0;
  amountChange: Subject<number> = new Subject<number>();

  constructor() {
    this.amountChange.subscribe((value) => {
      this.totalAmount = value;
    });
    console.log(this.totalAmount);
  }

  setCurrentGoodsList(goods: Goods, count: number) {
    let hasItemFlg = false;
    this.currentGoodsList.forEach((item) => {
      if (item.target.id === goods.id) {
        item.amount = count;
        hasItemFlg = true;
        return;
      }
    });
    if (!hasItemFlg) {
      this.currentGoodsList.push({ target: goods, amount: count });
    }
    this.setTotalAmount();
  }

  setTotalAmount() {
    this.totalAmount = 0;
    this.currentGoodsList.forEach((item) => {
      this.totalAmount += item.amount;
    });
    this.amountChange.next(this.totalAmount);
  }

  getCurrentGoodsList() {
    return this.currentGoodsList;
  }
}
