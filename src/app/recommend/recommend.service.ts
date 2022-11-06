import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GOODS } from '../mock-data/mock-goods';
import { Goods } from '../types/goods';

@Injectable({
  providedIn: 'root'
})
export class RecommendService {

  constructor() { }

  getGoodsList(): Observable<Goods[]> {
    return of(GOODS);
  }
}
