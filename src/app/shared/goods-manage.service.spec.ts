import { TestBed } from '@angular/core/testing';

import { GoodsManageService } from './goods-manage.service';

describe('GoodsManageService', () => {
  let service: GoodsManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoodsManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
