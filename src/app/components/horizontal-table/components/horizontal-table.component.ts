import { Component, OnInit } from '@angular/core';
import {MatButtonToggleGroup} from '@angular/material/button-toggle';

@Component({
  selector: 'app-horizontal-table',
  templateUrl: './horizontal-table.component.html',
  styleUrls: ['./horizontal-table.component.scss']
})
export class HorizontalTableComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource = ELEMENT_DATA;

  tables = [0];

  ngOnInit() {
  }

  constructor() {
    this.displayedColumns.length = 24;
    this.displayedColumns.fill('filler');

    // The first two columns should be position and name; the last two columns: weight, symbol
    this.displayedColumns[0] = 'position';
    this.displayedColumns[1] = 'name';
    this.displayedColumns[2] = 'test';
    this.displayedColumns[22] = 'weight';
    this.displayedColumns[23] = 'symbol';
  }

  /** Whether the button toggle group contains the id as an active value. */
  isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string) {

    console.log((buttonToggleGroup.value || []).indexOf(id) !== -1);

    return (buttonToggleGroup.value || []).indexOf(id) !== -1;
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  test: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, test: 'test', name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, test: 'test', name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, test: 'test', name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, test: 'test', name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, test: 'test', name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, test: 'test', name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, test: 'test', name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, test: 'test', name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, test: 'test', name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, test: 'test', name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
