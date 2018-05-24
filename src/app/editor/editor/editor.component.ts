import {Component, Input, OnInit} from '@angular/core';

const DEFAULT_TEXT = "";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @Input()
  boxList = [];
  outputBoxList = [];

  constructor() {
  }

  ngOnInit(): void {
    // initially our output is the same as input
    this.outputBoxList = this.boxList.slice();
  }

  updateOutput(newContent, index) {
    console.info(newContent, index);
    this.outputBoxList[index] = newContent;
  }

  removeBox(index) {
    this.boxList.splice(index, 1);
  }

  insertBoxAfter(index) {
    this.boxList.splice(index + 1, 0, DEFAULT_TEXT);
  }
}
