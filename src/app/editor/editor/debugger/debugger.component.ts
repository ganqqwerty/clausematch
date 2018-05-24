import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-debugger',
  templateUrl: './debugger.component.html',
  styleUrls: ['./debugger.component.css']
})
export class DebuggerComponent implements OnInit {

  @Input()
  content: any;

  constructor() { }

  ngOnInit() {
  }

}
