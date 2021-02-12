import {Component, Input} from '@angular/core';
import { ResultList } from '../resultList';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent {
  @Input() list!: ResultList;
  @Input() item: ResultList[] = [];
}
