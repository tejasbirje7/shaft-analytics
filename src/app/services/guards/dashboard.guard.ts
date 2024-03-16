import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {GlobalfieldsService} from '../app_cache/globalfields.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {

  constructor(private globalFieldService: GlobalfieldsService,
              private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("is Dashboard User : ",this.globalFieldService.checkIsDashboardUser());
    return this.globalFieldService.checkIsDashboardUser() ? true : this.router.createUrlTree(['/','error','403']);
  }

}
