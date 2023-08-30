import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {LayoutComponent} from '../layout/default/layout.component'
import {DashboardDefaultComponent} from "./dashboard/dashboard-default/dashboard-default.component"
import {DashboardAnalyticsComponent} from "./dashboard/dashboard-analytics/dashboard-analytics.component"
import {OrdersBoardComponent} from "./orders/orders-board/orders-board.component"
import {ItemsComponent} from "./store/items/items.component"
import {CampaignSavedComponent} from './engagement/campaign/saved/campaign-saved.component';
import {CampaignCreationComponent} from './engagement/campaign/creation/campaign-creation.component';
import {ChartsComponent} from './engagement/analytics/filter/charts.component';
import {FaqComponent} from './user/segment/faq.component';
import {ProfileComponent} from './user/profile/profile.component';
import {CategoryComponent} from './store/category/category.component';
import {TableBasicComponent} from './account-meta/events/table-basic.component';
import {InvoiceComponent} from './account-meta/billing/invoice.component';
import {TemplateComponent} from './account-meta/template/template.component';
const routeForPages = [
  {
    path: 'dashboard',
    data: {
      breadcrumb: 'Dashboard'
    },
    children: [
      {
        path: 'default',
        component: DashboardDefaultComponent,
        data: {
          breadcrumb: 'Default'
        },
      },
      {
        path: 'analytics',
        component: DashboardAnalyticsComponent,
        data: {
          breadcrumb: 'Analytics'
        },
      }
    ],
  },
  {
    path: 'orders-board',
    component: OrdersBoardComponent,
    data: {
      breadcrumb: 'Orders'
    }
  },
  {
    path: 'store',
    data: {
      breadcrumb: 'Store'
    },
    children: [
      {
        path: 'items',
        component: ItemsComponent,
        data: {
          breadcrumb: 'items'
        },
      },
      {
        path: 'category',
        component: CategoryComponent,
        data: {
          breadcrumb: 'category'
        },
      }
    ]
  },
  {
    path: 'engagement',
    data: {
      breadcrumb: 'Engagement'
    },
    children: [
      {
        path: 'campaign/create',
        component: CampaignCreationComponent,
        data: {
          breadcrumb: 'create'
        },
      },
      {
        path: 'campaign/saved',
        component: CampaignSavedComponent,
        data: {
          breadcrumb: 'saved'
        },
      },
      {
        path: 'analytics/create',
        component: CampaignCreationComponent,
        data: {
          breadcrumb: 'create'
        },
      },
      {
        path: 'analytics/filters',
        component: ChartsComponent,
        data: {
          breadcrumb: 'saved'
        },
      }
    ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: {
      breadcrumb: 'Profile'
    },
  },
  {
    path: 'segment',
    component: FaqComponent,
    data: {
      breadcrumb: 'Segment'
    },
  },
  {
    path: 'billing',
    component: InvoiceComponent,
    data: {
      breadcrumb: 'Billing'
    },
  },
  {
    path: 'events',
    component: TableBasicComponent,
    data: {
      breadcrumb: 'Events'
    }
  },
  {
    path: 'template',
    component: TemplateComponent,
    data: {
      breadcrumb: 'Template'
    }
  },
  {
    path: '**',
    redirectTo: '/app/dashboard/default',
    pathMatch: 'full',
  },
]

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: routeForPages,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
