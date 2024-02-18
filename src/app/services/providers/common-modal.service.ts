import {Injectable} from '@angular/core'
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog'
import {OrdersViewComponent} from '../../main/orders/orders-view/orders-view.component';
import {ItemsUpsertViewComponent} from '../../main/store/items-upsert-view/items-upsert-view.component';
import {CategoryUpsertViewComponent} from '../../main/store/category-upsert-view/category-upsert-view.component';
import {TemplateConfigureModalComponent} from '../../main/account-meta/template-configure-modal/template-configure-modal.component';
import {TemplateModalData} from '../../utils/interfaces/template-interfaces';
import {TemplateCatalogModalComponent} from '../../main/account-meta/template-catalog-modal/template-catalog-modal.component';
import {CampaignOverviewComponent} from '../../main/engagement/campaign/campaign-overview/campaign-overview.component';

@Injectable({
  providedIn: 'root'
})
export class CommonModalService {

  private ORDER_MODAL: MatDialogRef<OrdersViewComponent>
  private ITEM_EDIT_MODAL: MatDialogRef<ItemsUpsertViewComponent>
  private CATEGORY_EDIT_MODAL: MatDialogRef<CategoryUpsertViewComponent>
  private TEMPLATE_OPTION: MatDialogRef<TemplateConfigureModalComponent>
  private TEMPLATE_DEMO_MODAL: MatDialogRef<TemplateCatalogModalComponent>
  private CAMPAIGN_OVERVIEW_MODAL: MatDialogRef<CampaignOverviewComponent>


  constructor(private dialog: MatDialog) {
  }

  campaignOverview(campaignToBeViewed) {
    this.CAMPAIGN_OVERVIEW_MODAL = null;
    let config = new MatDialogConfig()

    config.viewContainerRef = null
    config.disableClose = false
    config.role = 'dialog'
    config.width = '600px'
    config.height = '800px'
    config.data = campaignToBeViewed

    this.CAMPAIGN_OVERVIEW_MODAL = this.dialog.open(CampaignOverviewComponent, config)
    return this.CAMPAIGN_OVERVIEW_MODAL
  }

  upsertItem(itemToBeViewed) {
    this.ITEM_EDIT_MODAL = null;
    let config = new MatDialogConfig()

    config.viewContainerRef = null
    config.disableClose = false
    config.role = 'dialog'
    config.width = '450px'
    config.height = '550px'
    config.data = itemToBeViewed

    this.ITEM_EDIT_MODAL = this.dialog.open(ItemsUpsertViewComponent, config)
    return this.ITEM_EDIT_MODAL
  }

  viewOrder(orderToBeViewed) {
    this.ORDER_MODAL = null
    let config = new MatDialogConfig()

    config.viewContainerRef = null
    config.disableClose = false
    config.role = 'dialog'
    config.width = '550px'
    config.height = '650px'
    config.data = orderToBeViewed

    this.ORDER_MODAL = this.dialog.open(OrdersViewComponent, config)
    return this.ORDER_MODAL
  }

  upsertCategory(modalData) {
    this.CATEGORY_EDIT_MODAL = null
    let config = new MatDialogConfig()

    config.viewContainerRef = null
    config.disableClose = false
    config.role = 'dialog'
    config.width = '300px'
    config.height = '250px'
    config.data = modalData

    this.CATEGORY_EDIT_MODAL = this.dialog.open(CategoryUpsertViewComponent, config)
    return this.CATEGORY_EDIT_MODAL
  }

  addTemplateOption(modalData: TemplateModalData) {
    this.TEMPLATE_OPTION = null
    let config = new MatDialogConfig()

    config.viewContainerRef = null
    config.disableClose = false
    config.role = 'dialog'
    config.width = '500px'
    config.height = '450px'
    config.data = modalData

    this.TEMPLATE_OPTION = this.dialog.open(TemplateConfigureModalComponent, config)
    return this.TEMPLATE_OPTION
  }

  viewTemplateDemo(modalData) {
    this.TEMPLATE_DEMO_MODAL = null;
    let config = new MatDialogConfig();

    config.viewContainerRef = null
    config.disableClose = false
    config.role = 'dialog'
    config.width = '1500px'
    config.height = '800px'
    config.data = modalData

    this.TEMPLATE_DEMO_MODAL = this.dialog.open(TemplateCatalogModalComponent, config);
    return this.TEMPLATE_DEMO_MODAL;

  }

}
