import {Injectable} from '@angular/core';
import {LocalStorageService} from './local-storage.service';


@Injectable({
    providedIn: 'root'
})
export class GlobalfieldsService {

    accId = '1600';
    title : string;
    isDashboardUser: boolean = true;
    userInSession: String = '';
    i: Number;
    userAddress = [];
    appRoutes = [];
    dashboardRoutes = [];
    routes = {
        'appRoutes': [{
            title: 'Home',
            url: '/welcome',
            icon: 'home'
        },
            {
                title: 'My Orders',
                url: '/orders',
                icon: 'basket'
            },
            {
                title: 'About Us',
                url: '/aboutus',
                icon: 'analytics'
            },
            {
                title: 'Login',
                url: '/auth',
                icon: 'paper-plane'
            },
            {
                title: 'Logout',
                url: '/auth',
                icon: 'paper-plane'
            }],
        'dashboardRoutes': [{
            title: 'Dashboard',
            url: '/dashboard',
            icon: 'bar-chart'
        },
            {
                title: 'Orders',
                url: '/manage-order',
                icon: 'basket'
            },
            {
                title: 'Analytics',
                url: '/analytics',
                icon: 'analytics'
            },
            {
                title: 'Store',
                url: '/store',
                icon: 'home'
            },
            {
                title: 'Campaign',
                url: '/campaign',
                icon: 'home'
            },
            {
                title: 'People',
                url: '/people',
                icon: 'people'
            }
        ]
    };

    constructor(
        private localStorageService: LocalStorageService
    ) {
        this.appRoutes = this.routes.appRoutes.slice();
        this.dashboardRoutes = this.routes.dashboardRoutes.slice();
    }

    epochToJsDate(ts) {
        return new Date(ts * 1000);
    }

    jsDateToEpoch(d) {
        return (d.getTime() - d.getMilliseconds()) / 1000;
    }

    getAccountId(): string {
        return this.accId;
    }

    async setUserDetails(userDetails) {
        console.log("uDetails : ", userDetails)
        this.localStorageService.set("i", userDetails["i"]);
        this.localStorageService.set("tk", userDetails["tk"]);
        this.setUserInSession(userDetails['e']);
        this.setIsDashboardUser(userDetails['idu']);
        this.setI(userDetails['i']);
    }

    async clearUserDetails() {
        // this.localStorageService.clear(); Don't clear local storage here otherwise it will remove i and
        // there will arise a situation where new i can be generated
        this.localStorageService.remove('tk');
        this.userInSession = '';
        this.userAddress = [];
        this.isDashboardUser = false;
        this.i = null;
        this.disableAuthRoutes('Logout');
    }

    setI(id) {
        this.i = id;
    }

    getI() {
        return this.i > 0 ? this.i : null;
    }

    isUserIdentified(): boolean {
        return this.userInSession != undefined && this.userInSession.trim().length > 0;
    }

    checkIsDashboardUser() {
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


    getRoutes() {
        return this.routes;
    }

    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title
    }

    disableAuthRoutes(key) {
        var aR = this.routes.appRoutes.slice();
        for (var i = 0; i < aR.length; i++) {
            if (aR[i]['title'] == key) {
                aR.splice(i, 1);
            }
        }
        this.appRoutes = aR;
    }
}
