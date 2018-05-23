import {Injectable} from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EditorStorageService {

  constructor() {
  }

  getTexts(): Observable<Array<string>> {
    return of(['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water']);

  }
}
