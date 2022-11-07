import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Goods } from '../types/goods';

@Injectable({
  providedIn: 'root',
})
export class GoodsManageService {
  currentGoodsList: { target: Goods; amount: number }[] = [];
  currentAmount: number = 0
  totalAmount: BehaviorSubject<number> = new BehaviorSubject<number>(0);


  constructor() { }

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
    this.currentAmount = 0;
    this.currentGoodsList.forEach((item) => {
      this.currentAmount += item.amount;
    });
    this.totalAmount = new BehaviorSubject<number>(this.currentAmount);
  }

  getTotalAmount(): Observable<number> {
    return this.totalAmount.asObservable();
  }

  getCurrentGoodsList() {
    return this.currentGoodsList;
  }

  getGoodsAmountById(id: number): number {
    let goodsAmount = 0
    this.currentGoodsList.forEach((item) => {
      if (item.target.id === id) {
        goodsAmount = item.amount;
      }
    });
    return goodsAmount;
  }
}
