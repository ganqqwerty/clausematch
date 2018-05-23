import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, AfterViewInit {

  @Input()
  boxList = [];

  @ViewChild('itemcontent') editableContent: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit():void {
    fromEvent(this.editableContent.nativeElement, 'input').subscribe(x=>console.log);
  }

  onKeyUp($event) {
    console.log();
  }

}
