import {Component, Input, OnInit} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {ResultList} from '../resultList';
@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent implements OnInit {
  date!: string;
  distance!: number;
  time!: number;
  speed!: number;
  option = 'Edit Delete';

  constructor() { }
  @Input() array: ResultList[] = [];
  @Input() newVar!: ResultList;
  @Output() newItemEvent = new EventEmitter<ResultList[]>();
  addNewItem(): void {
    this.newItemEvent.emit(this.array);
  }

  ngOnInit(): void {
  }

  saveToTable(date: string, distance: number, time: number): void {
    this.date = date;
    this.distance = distance;
    this.time = time;
    // @ts-ignore
    this.speed = this.distance / this.time;
    this.newVar = {date: this.date, distance: this.distance, time: this.time,
      speed: this.speed, option: this.option};
    this.array.push(this.newVar);
  }
}
