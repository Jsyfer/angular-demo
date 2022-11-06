import { Component, Input, OnInit } from '@angular/core';

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
  @Input() cardAction? : string = '详细';

  constructor() { }

  ngOnInit(): void {
  }

}
