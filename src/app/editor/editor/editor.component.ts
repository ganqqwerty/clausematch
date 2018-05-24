import {Component, Input, OnInit} from '@angular/core';

const DEFAULT_TEXT = "";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @Input()
  initialContents = [DEFAULT_TEXT];
  changedContents = [DEFAULT_TEXT];

  constructor() {
  }

  ngOnInit(): void {
    // initially our output is the same as input
    this.syncChangedToInitial();
  }

  updateOutput(newContent, index) {
    this.changedContents[index] = newContent;
  }

  removeBox(index) {
    // make sure we always have at least one box visible
    if(this.changedContents.length < 2) {
      this.changedContents = [DEFAULT_TEXT];
    }
    else {
      this.changedContents.splice(index, 1);
    }
    this.syncInitialToChanged();
  }

  insertBoxAfter(index) {
    this.changedContents.splice(index + 1, 0, DEFAULT_TEXT);
    this.initialContents = this.changedContents.slice();
  }

  private syncInitialToChanged() {
    this.initialContents = this.changedContents.slice();
  }

  private syncChangedToInitial() {
    this.changedContents = this.initialContents.slice();
  }


}
