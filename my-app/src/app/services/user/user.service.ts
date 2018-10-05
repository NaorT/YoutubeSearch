import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import * as M from '../../models';
import * as uuidv1 from 'uuid/v1';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: M.User;
  constructor(private localStorage: LocalStorageService) {}

  public initUserData(): void {
    const user = this.localStorage.getItem(M.LocalStorageKey.user);
    if (user) {
      this.user = user;
      return ;
    }
    this.initUser();
  }
  initUser(): void {
    this.user = {
      id: uuidv1(),
    };
    this.localStorage.setItem(M.LocalStorageKey.user , this.user);
  }

 public getCurrentUser(): M.User {
    return this.user;
  }
}
