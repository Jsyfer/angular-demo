import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardImgSrc? : String= '';
  @Input() cardImgAlt? : String = '';
  @Input() cardTitle? : String = '';
  @Input() cardText? : String = '';
  @Input() cardAction? : String = '详细';

  constructor() { }

  ngOnInit(): void {
  }

}
