import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {DashboardGuard} from './services/guards/dashboard.guard';

// @ts-ignore
const routes: Routes = [
  {
    path: 'app',
    data:{
      breadcrumb: 'Home'
    },
    canActivate: [DashboardGuard],
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '/auth/modern/signin',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
