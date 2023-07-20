import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/core';
import { Subject } from 'rxjs';
import {GlobalfieldsService} from './globalfields.service';


/**
 * https://firstclassjs.com/persist-data-using-local-storage-and-angular/
 * #TODO Refer above site on how to use the subject changes$ in context with async if localStorage is changed
 * This will ensure that every component is aware of local storage changes
 */
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  localStorage : Storage;
  sessionStorage : Storage;

  changes$ = new Subject();

  constructor() {
    this.localStorage = window.localStorage;
    this.sessionStorage = window.sessionStorage;
  }

  get(key: string): any {
    if (this.isLocalStorageSupported && key != undefined) {
      return this.localStorage.getItem(key);
    }
    return null;
  }

  set(key: string, value: any): boolean {
    try {
      if (this.isLocalStorageSupported) {
        this.localStorage.setItem(key, JSON.stringify(value));
        this.changes$.next({
          type: 'set',
          key,
          value
        });
        return true;
      }
      return false;
    } catch (e) {
      console.log("LS exception :",e);
    }
  }

  remove(key: string): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.removeItem(key);
      this.changes$.next({
        type: 'remove',
        key
      });
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.clear();
      this.changes$.next({
        type: 'clear'
      });
      return true;
    }
    return false;
  }

  get isLocalStorageSupported(): boolean {
    return !!this.localStorage
  }
}
