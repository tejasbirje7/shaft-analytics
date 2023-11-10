import {Injectable} from '@angular/core'
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog'
import {OrdersViewComponent} from '../../main/orders/orders-view/orders-view.component';
import {ItemsUpsertViewComponent} from '../../main/store/items-upsert-view/items-upsert-view.component';
import {CategoryUpsertViewComponent} from '../../main/store/category-upsert-view/category-upsert-view.component';
import {TemplateViewComponent} from '../../main/account-meta/template-view/template-view.component';
import {TemplateModalData} from '../../utils/interfaces/template-interfaces';
import {TemplateDemoComponent} from '../../main/account-meta/template-demo/template-demo.component';

@Injectable({
  providedIn: 'root'
})
export class CommonModalService {

  private ORDER_MODAL: MatDialogRef<OrdersViewComponent>
  private ITEM_EDIT_MODAL: MatDialogRef<ItemsUpsertViewComponent>
  private CATEGORY_EDIT_MODAL: MatDialogRef<CategoryUpsertViewComponent>
  private TEMPLATE_OPTION: MatDialogRef<TemplateViewComponent>
  private TEMPLATE_DEMO_MODAL: MatDialogRef<TemplateDemoComponent>


  constructor(private dialog: MatDialog) {
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

    this.TEMPLATE_OPTION = this.dialog.open(TemplateViewComponent, config)
    return this.TEMPLATE_OPTION
  }

  viewTemplateDemo(modalData) {
    this.TEMPLATE_DEMO_MODAL = null;
    let config = new MatDialogConfig();

    config.viewContainerRef = null
    config.disableClose = false
    config.role = 'dialog'
    config.width = '500px'
    config.height = '450px'
    config.data = modalData

    this.TEMPLATE_DEMO_MODAL = this.dialog.open(TemplateDemoComponent, config);
    return this.TEMPLATE_DEMO_MODAL;

  }

}
