import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {SharedModule} from "../shared/shared.module"
import {LayoutModule} from "../layout/layout.module"
import {AgGridModule} from '@ag-grid-community/angular'
import {ChartsModule} from '../../@shaft-components'
import {MainRoutingModule} from './main-routing.module'

import {DashboardDefaultComponent} from './dashboard/dashboard-default/dashboard-default.component'
import {DashboardAnalyticsComponent} from './dashboard/dashboard-analytics/dashboard-analytics.component'
import { StarterFullWidthBasicComponent } from './starters/full-width/starter-full-width-basic/starter-full-width-basic.component';
import { StarterFullWidthHeaderComponent } from './starters/full-width/starter-full-width-header/starter-full-width-header.component';
import { StarterFullWidthTabsComponent } from './starters/full-width/starter-full-width-tabs/starter-full-width-tabs.component';
import { StarterLeftSidebarBasicComponent } from './starters/left-sidebar/starter-left-sidebar-basic/starter-left-sidebar-basic.component';
import { StarterLeftSidebarHeaderComponent } from './starters/left-sidebar/starter-left-sidebar-header/starter-left-sidebar-header.component';
import { StarterLeftSidebarTabsComponent } from './starters/left-sidebar/starter-left-sidebar-tabs/starter-left-sidebar-tabs.component';
import { StarterRightSidebarBasicComponent } from './starters/right-sidebar/starter-right-sidebar-basic/starter-right-sidebar-basic.component';
import { StarterRightSidebarHeaderComponent } from './starters/right-sidebar/starter-right-sidebar-header/starter-right-sidebar-header.component';
import { StarterRightSidebarTabsComponent } from './starters/right-sidebar/starter-right-sidebar-tabs/starter-right-sidebar-tabs.component';
import { StarterApplicationBasicComponent } from './starters/application/starter-application-basic/starter-application-basic.component';
import { StarterApplicationAdvancedComponent } from './starters/application/starter-application-advanced/starter-application-advanced.component';
import { StarterApplicationComplexComponent } from './starters/application/starter-application-complex/starter-application-complex.component'

import {ItemsComponent} from './store/items/items.component'
import {DummyTableExpansionComponent} from './components/dummy-table-expansion/dummy-table-expansion.component'
import {DummyTableAdvancedComponent} from './components/dummy-table-advanced/dummy-table-advanced.component'
import {DummyTablePaginationComponent} from './components/dummy-table-pagination/dummy-table-pagination.component'
import {DummyTableRichComponent} from './components/dummy-table-rich/dummy-table-rich.component'
import {DummyFormCreditCardComponent} from './components/dummy-form-credit-card/dummy-form-credit-card.component'
import {DummyFormBillingComponent} from './components/dummy-form-billing/dummy-form-billing.component'
import {DummyFormWizardComponent} from './components/dummy-form-wizard/dummy-form-wizard.component'
import {OrdersBoardComponent} from './orders/orders-board/orders-board.component'
import {OrdersViewComponent} from './orders/orders-view/orders-view.component'
import {CampaignSavedComponent} from './engagement/campaign/saved/campaign-saved.component';
import {CampaignCreationComponent} from './engagement/campaign/creation/campaign-creation.component';
import {ChartsComponent} from './engagement/analytics/saved/charts.component';
import {FaqComponent} from './user/segment/faq.component';
import {ProfileComponent} from './user/profile/profile.component';
import {CategoryComponent} from './store/category/category.component';
import {TableBasicComponent} from './account-meta/events/table-basic.component';
import {InvoiceComponent} from './account-meta/billing/invoice.component';
import {ItemsUpsertViewComponent} from './store/items-upsert-view/items-upsert-view.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { CategoryUpsertViewComponent } from './store/category-upsert-view/category-upsert-view.component';
import { TemplateComponent } from './account-meta/template/template.component';
import { TemplateConfigureComponent } from './account-meta/template-configure/template-configure.component';
import {TemplateCatalogComponent} from './account-meta/template-catalog/template-catalog.component';
import { TemplateDemoComponent } from './account-meta/template-demo/template-demo.component';
import {FilterComponent} from './engagement/analytics/filter/filter.component';
import {CampaignOverviewComponent} from './engagement/campaign/campaign-overview/campaign-overview.component';

@NgModule({
  declarations: [
    DashboardDefaultComponent,
    DashboardAnalyticsComponent,
    DummyTableExpansionComponent,
    DummyTableAdvancedComponent,
    DummyTablePaginationComponent,
    DummyTableRichComponent,
    DummyFormCreditCardComponent,
    DummyFormBillingComponent,
    DummyFormWizardComponent,
    StarterFullWidthBasicComponent,
    StarterFullWidthHeaderComponent,
    StarterFullWidthTabsComponent,
    StarterLeftSidebarBasicComponent,
    StarterLeftSidebarHeaderComponent,
    StarterLeftSidebarTabsComponent,
    StarterRightSidebarBasicComponent,
    StarterRightSidebarHeaderComponent,
    StarterRightSidebarTabsComponent,
    StarterApplicationBasicComponent,
    StarterApplicationAdvancedComponent,
    StarterApplicationComplexComponent,
    OrdersBoardComponent,
    OrdersViewComponent,
    ItemsComponent,
    ItemsUpsertViewComponent,
    TableBasicComponent,
    CategoryComponent,
    CampaignSavedComponent,
    CampaignCreationComponent,
    FilterComponent,
    ChartsComponent,
    FaqComponent,
    ProfileComponent,
    InvoiceComponent,
    CategoryUpsertViewComponent,
    TemplateComponent,
    TemplateCatalogComponent,
    TemplateConfigureComponent,
    TemplateDemoComponent,
    CampaignOverviewComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutModule,
    SharedModule,
    ChartsModule,
    AgGridModule.withComponents([]),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class MainModule {
}
