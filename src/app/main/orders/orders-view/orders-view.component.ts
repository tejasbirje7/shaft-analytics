import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CommonService} from '../../../services/providers/common.service';
import {RouteConstants} from '../../../utils/constants/route-constants';

@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.scss']
})
export class OrdersViewComponent implements OnInit {

  public infoTab:boolean = true;
  public itemsTab:boolean = false;
  public trackingTab:boolean = false;
  public orderViewedId:number = 0;

  public itemsInOrder =[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public orderToBeViewed: string,
    private restClient: CommonService,
    private dialogRef: MatDialogRef<OrdersViewComponent>) {
  }

  ngOnInit(): void {
    console.log("data ",this.orderToBeViewed);
  }

  onClose() {
    this.dialogRef.close(false)
  }

  onCloseSidebar(event){

  }

  onTabChange(tabId : number) {
    if(tabId === 1) {
      this.infoTab = true;
      this.itemsTab = false;
      this.trackingTab = false;
    } else if (tabId === 2) {
      this._getOrderItems({
        "oid" : this.orderToBeViewed["oid"],
        "items": this.orderToBeViewed["items"]})
        .subscribe(res => {
          let r = JSON.parse(JSON.stringify(res));
          console.log("Order : ",r)
          this.itemsInOrder = r["data"];
          this.orderViewedId = this.orderToBeViewed["oid"];
          this.itemsTab = true;
          this.infoTab = false;
          this.trackingTab = false;
        }, (err) => {
          console.log(err);
        });
    } else if (tabId === 3) {
      this.trackingTab = true;
      this.infoTab = false;
      this.itemsTab = false
    }
  }

  epochToJsDate(ts) {
    return new Date(ts * 1000).toLocaleDateString();
  }

  _getOrderItems(data:any = {}){
    return this.restClient.invokeDashboardService(RouteConstants.GET_ITEMS_IN_ORDER,data);
  }

}
