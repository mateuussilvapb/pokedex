import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss'],
})
export class PokeSearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() public emitSearch = new EventEmitter();

  public search(value: string) {
    this.emitSearch.emit(value);
  }
}
