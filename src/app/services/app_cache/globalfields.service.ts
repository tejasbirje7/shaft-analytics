import {Injectable} from '@angular/core';
import {LocalStorageService} from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class GlobalfieldsService {

  accId : string = '1600';
  title : string;
  isDashboardUser: boolean = false;
  userInSession: String = '';
  userAddress = [];
  appRoutes = [];

  constructor(
    private localStorageService: LocalStorageService
  ) {
  }

  epochToJsDate(ts) {
    return new Date(ts * 1000);
  }

  jsDateToEpoch(d) {
    return (d.getTime() - d.getMilliseconds()) / 1000;
  }

  isAccountIdSet(): Boolean {
    return this.accId.length >  0;
  }

  getAccountId(): string {
    return this.accId;
  }

  setAccountId(accId: string){
    this.accId = accId;
  }

  async setUserDetails(userDetails) {
    console.log("uDetails : ", userDetails)
    this.localStorageService.set("tk", userDetails["tk"]);
    this.setUserInSession(userDetails['e']);
    this.setIsDashboardUser(userDetails['idu']);
  }

  async clearUserDetails() {
    this.localStorageService.remove('tk');
    this.userInSession = '';
    this.userAddress = [];
    this.isDashboardUser = false;
  }

  isUserIdentified(): boolean {
    return this.userInSession != undefined && this.userInSession.trim().length > 0;
  }

  checkIsDashboardUser() {
    console.log("isDashboardUser : ",this.isDashboardUser);
    return this.isDashboardUser;
  }

  setIsDashboardUser(flag: boolean) {
    this.isDashboardUser = flag;
  }

  getUserInSession() {
    return this.userInSession;
  }

  setUserInSession(email: String) {
    this.userInSession = email;
  }
}
