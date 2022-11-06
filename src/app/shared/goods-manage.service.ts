import { Injectable } from '@angular/core';
import { Goods } from '../types/goods';

@Injectable({
  providedIn: 'root'
})
export class GoodsManageService {
  currentGoodsList: {target: Goods,amount: number}[]=[];
  

  constructor() { }

  getCurrentGoodsList(){
    return this.currentGoodsList;
  }

  setCurrentGoodsList(goods: Goods, count:number){
    
  }
}
