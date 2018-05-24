import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {EditorStorageService} from './editor-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  initialContents$: Observable<any>;

  constructor(private storage: EditorStorageService) {

  }

  ngOnInit() {
    this.initialContents$ = this.storage.getTexts();
  }
}
