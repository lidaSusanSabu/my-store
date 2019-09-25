import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() newPushEvent = new EventEmitter<any>();

  constructor() { }
  search = 'lavender';

  ngOnInit() {
  }
  pushData() {
    this.newPushEvent.emit(this.search);
  }

}
