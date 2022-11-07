import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsViewComponent } from './goods-view.component';

describe('GoodsViewComponent', () => {
  let component: GoodsViewComponent;
  let fixture: ComponentFixture<GoodsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
