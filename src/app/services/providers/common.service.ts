import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map} from 'rxjs/operators';
import {GlobalfieldsService} from '../app_cache/globalfields.service';
import {LocalStorageService} from '../app_cache/local-storage.service';

//const host = "13.232.148.77";
const host = "localhost"
const apiUrl = "http://"+host+":8080";
const dashboardUrl = "https://shaftinsights.com";
const testUrl = "httpgt5://"+host+":3000";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private http: HttpClient,
    private globalFieldService : GlobalfieldsService,
    private localStorageService : LocalStorageService) { }

  invokeDashboardService(operationType : string, data : any = {}, httpOptions = undefined): Observable<any> {
    const headers = !httpOptions ? { headers : new HttpHeaders( {
        account:this.globalFieldService.getAccountId(),
        u: this.globalFieldService.isUserIdentified() ? String(this.globalFieldService.getUserInSession()) : '',
        tk: this.localStorageService.get('tk') != null ? String(this.localStorageService.get('tk')).replace(/['"]+/g, '') : '',
        operationType : operationType } ) } : httpOptions;
    const url = `${dashboardUrl}/${operationType}`;
    return this.http.post(url, data, headers)
      .pipe(
        catchError(this.handleError)
      );
  }

  uploadDashboardFile(operationType, data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        account:this.globalFieldService.getAccountId(),
        'operationType':operationType
      })
    };
    const url = `${dashboardUrl}/a2`;
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
    //return this.invokeMasterService("", data, httpOptions)
  }

  uploadFileService(operationType, data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'operationType':operationType
      })
    };
    const url = `${apiUrl}/a1`;
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
    //return this.invokeMasterService("", data, httpOptions)
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(error);
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

}
