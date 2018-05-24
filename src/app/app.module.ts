import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DndModule} from 'ng2-dnd';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor/editor.component';
import { DebuggerComponent } from './editor/editor/debugger/debugger.component';
import { EditorBoxComponent } from './editor/editor/editor-box/editor-box.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    DebuggerComponent,
    EditorBoxComponent
  ],
  imports: [
    BrowserModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
