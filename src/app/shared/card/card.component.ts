import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardImgSrc? : string= '';
  @Input() cardImgAlt? : string = '';
  @Input() cardTitle? : string = '';
  @Input() cardText? : string = '';
  @Input() cardAction? : string = '';
  @Input() cardActionUrl? : string = '';
  count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
}
