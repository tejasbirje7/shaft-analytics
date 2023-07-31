import {Injectable} from '@angular/core'
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog'
import {OrdersViewComponent} from '../../main/orders/orders-view/orders-view.component';
import {ItemsUpsertViewComponent} from '../../main/store/items-upsert-view/items-upsert-view.component';

@Injectable({
  providedIn: 'root'
})
export class CommonModalService {

  private orderModal: MatDialogRef<OrdersViewComponent>
  private itemEditModal: MatDialogRef<ItemsUpsertViewComponent>

  constructor(private dialog: MatDialog) {
  }

  upsertItem(itemToBeViewed) {
    this.itemEditModal = null;
    let config = new MatDialogConfig()

    config.viewContainerRef = null
    config.disableClose = false
    config.role = 'dialog'
    config.width = '450px'
    config.height = '550px'
    config.data = itemToBeViewed

    this.itemEditModal = this.dialog.open(ItemsUpsertViewComponent, config)
    return this.itemEditModal
  }

  viewOrder(orderToBeViewed) {
    this.orderModal = null
    let config = new MatDialogConfig()

    config.viewContainerRef = null
    config.disableClose = false
    config.role = 'dialog'
    config.width = '550px'
    config.height = '650px'
    config.data = orderToBeViewed

    this.orderModal = this.dialog.open(OrdersViewComponent, config)
    return this.orderModal
  }
}
