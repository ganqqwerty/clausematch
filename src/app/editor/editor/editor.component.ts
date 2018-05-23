import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';


const DEFAULT_TEXT = "";

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

  updateModel(newContent, index) {
    console.info(newContent, index);
    this.boxList[index]=newContent;
  }

  removeBox(index) {
    this.boxList.splice(index,1);
  }

  insertBoxAfter(index) {
    this.boxList.splice(index+1, 0, DEFAULT_TEXT);
  }
}
