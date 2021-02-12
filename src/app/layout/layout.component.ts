import {Component, Input, OnInit} from '@angular/core';
import {ResultList} from './resultList';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  @Input() products!: ResultList[];
  addItem(newItem: ResultList[]): void {
    this.products = newItem;
  }
}
