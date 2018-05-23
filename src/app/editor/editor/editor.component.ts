import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @Input()
  boxList = [];
  tmp = "dsfdf";


  constructor() {
  }

  ngOnInit(): void {
  }


  onKeyUp($event) {
    console.log();
  }

  updateModel(i, newContent) {

  }

  removeBox(i) {

  }

  insertBoxAfter(i) {

  }
}
