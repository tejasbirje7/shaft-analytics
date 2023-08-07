import {Component, OnInit} from '@angular/core'
import {CommonService} from '../../../services/providers/common.service';
import {RouteConstants} from '../../../utils/constants/route-constants';
import {CommonModalService} from '../../../services/providers/common-modal.service';
import {BehaviorSubject, forkJoin} from 'rxjs';
import {CategoryInfo, ModalData, ProductInfo} from '../../../utils/interfaces/store-interfaces';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items : ProductInfo[];
  categories : CategoryInfo[];
  categoryMap : any = {};
  productList$ = new BehaviorSubject<ProductInfo[]>([]);
  categoryList$ = new BehaviorSubject<CategoryInfo[]>([]);
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
    const items$ = this._getItems();
    const categories$ = this._getCategories();
    forkJoin([items$,categories$]).subscribe((data: any) => {
      this.productList$.next(data[0]["data"]);
      this.categoryList$.next(data[1]["data"]);
    });
    this.transactWithItems();
    this,this.transactWithCategories();
  }

  transactWithItems() {
    this.productList$.subscribe(items => {
      this.items = items
      this.fillCategoryToItemMap();
    })
  }

  transactWithCategories() {
    this.categoryList$.subscribe(categories => {
      this.categories = categories;
    })
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
    this.populateModalData(item)
  }

  onClose(event) {
    this.isDetailsOpened = false
  }

  populateModalData(itemSelected) {
    let modalData  = {} as ModalData
    modalData.itemToBeViewed = itemSelected;
    modalData.categories = this.categories;
    this.onView(modalData);
  }
  addItem(){
    let modalData = {} as ModalData;
    modalData.add = true;
    modalData.categories = this.categories;
    this.onView(modalData);
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
