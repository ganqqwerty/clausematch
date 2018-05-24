import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs/internal/observable/fromEvent';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-editor-box',
  templateUrl: './editor-box.component.html',
  styleUrls: ['./editor-box.component.css']
})
export class EditorBoxComponent implements OnInit, AfterViewInit, OnDestroy {

  /**
   * Initial content of the text box
   */
  @Input()
  content: string;

  @ViewChild('editableContent')
  private editableContent: ElementRef;

  /**
   * indicates that the user wants to insert the new text box after the current one
   * @type {EventEmitter<any>}
   */
  @Output()
  insertAfter: EventEmitter<any> = new EventEmitter();

  /**
   * indicates that the user wants to delete the current text box
   * @type {EventEmitter<any>}
   */
  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  /**
   * emits an event whenever the content of the editable element changes
   * @type {EventEmitter<any>}
   */
  @Output()
  contentChange: EventEmitter<string> = new EventEmitter();

  /**
   * must be cleaned up in destroy phase
   */
  private contentChangeSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.contentChangeSubscription = fromEvent(this.editableContent.nativeElement, 'input')
      .subscribe((event) => {
        const newValue = event.target.innerHTML;
        this.contentChange.emit(newValue);
        console.log(event);
      });
  }

  ngOnDestroy() {
    this.contentChangeSubscription.unsubscribe();
  }

  insertBoxAfterCurrent() {
    this.insertAfter.emit(null);
  }

  removeBox() {
    this.remove.emit(null);
  }

  formatItalic(event) {
    console.log(event);
    document.execCommand('italic', false);
  }

  formatBold(event) {
    console.log(event);
    document.execCommand('bold', false);
  }

}
