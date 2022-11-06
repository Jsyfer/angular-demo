import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsPreviewComponent } from './goods-preview.component';

describe('GoodsPreviewComponent', () => {
  let component: GoodsPreviewComponent;
  let fixture: ComponentFixture<GoodsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
