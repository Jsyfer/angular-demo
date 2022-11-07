import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() count : number = 0;
  @Output() countEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  countChange() {
    this.countEvent.emit(this.count);
  }

}
