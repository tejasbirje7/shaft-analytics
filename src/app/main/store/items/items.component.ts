import {Component, OnInit} from '@angular/core'
import {CommonService} from '../../../services/providers/common.service';
import {RouteConstants} from '../../../constants/route-constants';
import {ModalService} from '../../../services/providers/modal.service';
import {CommonModalService} from '../../../services/providers/common-modal.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items = [];
  categoryMap : any = {};
  public selectedItem = {
    "img" : "",
    "name" : "",
    "description" : "",
    "costPrice" : "",
    "qt" : 0,
    "category" : ""
  }
  public isDetailsOpened: boolean = false
  constructor(
    private restClient : CommonService,
    private modal : CommonModalService) {
  }

  ngOnInit(): void {
    this._getItems()
      .subscribe(res => {
        let r = JSON.parse(JSON.stringify(res));
        console.log("Items : ",r);
        this.items = r.data;
        this.fillCategoryToItemMap()
      }, (err) => {
        console.log(err);
      });
  }

  fillCategoryToItemMap() {
    console.log(this.items)
    for (let k =0 ; k < this.items.length ; k++) {
      if (this.categoryMap.hasOwnProperty(this.items[k]["category"])) {
        this.categoryMap[this.items[k]["category"]]["i"] = this.categoryMap[this.items[k]["category"]]["i"] + 1;
        this.categoryMap[this.items[k]["category"]]["q"] = this.categoryMap[this.items[k]["category"]]["q"] + this.items[k]["qt"];
        this.categoryMap[this.items[k]["category"]]["items"].push(this.items[k]);
      } else {
        this.categoryMap[this.items[k]["category"]] = {
          "i" : 1,
          "q" : this.items[k]["qt"],
          "items" : [this.items[k]]
        }
      }
    }
    console.log("Category Map : ",this.categoryMap)
  }

  onSelectItem(item) {
    this.isDetailsOpened = true
    this.selectedItem = item
  }

  onClose(event) {
    this.isDetailsOpened = false
  }

  populateModalData(itemSelected) {
    this._getCategories()
      .subscribe(res => {
        let r = JSON.parse(JSON.stringify(res));
        let modalData = {};
        modalData["itemToBeViewed"] = itemSelected;
        modalData["categories"] = r.data;
        this.onView(modalData);
      }, (err) => {
        console.log(err);
      });
  }


  onView(modalData) {
    this.modal.upsertItem(modalData).afterClosed().subscribe(() => {

    })
  }

  _getItems(){
    return this.restClient.invokeDashboardService(RouteConstants.GET_ITEMS);
  }

  _getCategories(){
    return this.restClient.invokeDashboardService(RouteConstants.GET_CATEGORIES);
  }
}
