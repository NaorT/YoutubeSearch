import { Injectable } from '@angular/core';
import * as M from './models';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {}

  setItem(key: M.LocalStorageKey, value): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: M.LocalStorageKey) {
    const value  = JSON.parse(localStorage.getItem(key));
    return value;
  }
}
