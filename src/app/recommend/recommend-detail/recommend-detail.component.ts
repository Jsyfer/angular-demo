import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommend-detail',
  templateUrl: './recommend-detail.component.html',
  styleUrls: ['./recommend-detail.component.css']
})
export class RecommendDetailComponent implements OnInit {
  cardTitle : String = 'test';
  cardImgSrc: String = 'data:image/jpeg;base64,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'
  constructor() { }

  ngOnInit(): void {
  }

}
