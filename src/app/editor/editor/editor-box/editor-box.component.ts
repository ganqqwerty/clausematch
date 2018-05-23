import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs/internal/observable/fromEvent';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-editor-box',
  templateUrl: './editor-box.component.html',
  styleUrls: ['./editor-box.component.css']
})
export class EditorBoxComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input()
  content: string;

  @ViewChild('editableContent')
  editableContent: ElementRef;

  @Output()
  insertAfter: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  @Output()
  contentChange: EventEmitter<string> = new EventEmitter();

  private contentChangeSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.contentChangeSubscription = fromEvent(this.editableContent.nativeElement, 'input')
      .subscribe(event => {
        const newValue = event.target.innerHTML;
        this.contentChange.emit(newValue);
        console.log(event.target.innerHTML);
      });
  }

  ngOnDestroy() {
    this.contentChangeSubscription.unsubscribe();
  }

  insertBoxAfterCurrent(){
    this.insertAfter.emit(null);
  }

  removeBox() {
    this.remove.emit(null);
  }



}
