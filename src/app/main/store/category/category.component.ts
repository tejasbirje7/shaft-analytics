import {Component, OnInit, SimpleChanges, TemplateRef, ViewChild} from '@angular/core';
import {getDummyModel} from '../../../../@shaft-components/data/dummy';
import {TableHeaderItem, TableItem, TableModel} from 'carbon-components-angular';
import {RouteConstants} from '../../../constants/route-constants';
import {CommonService} from '../../../services/providers/common.service';
import {BehaviorSubject, forkJoin} from 'rxjs';

const getSizeFrom = (name) => {
  const trans = {
    "Small": 'sm',
    "Short": 'sh',
    "Normal": 'md',
    "Large": 'lg',
  }
  return trans[name]
}


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  productList$ = new BehaviorSubject<ProductInfo[]>([]);
  categoryList$ = new BehaviorSubject<CategoryInfo[]>([]);
  categoryToItemsMap : any = {};
  @ViewChild("totalHeaderTemplate", {static: true}) totalHeaderTemplate: TemplateRef<any>
  @ViewChild("proficiencyTemplate", {static: true}) proficiencyTemplate: TemplateRef<any>
  @ViewChild("totalTemplate", {static: true}) totalTemplate: TemplateRef<any>
  @ViewChild("onlineTemplate", {static: true}) onlineTemplate: TemplateRef<any>


  public size = 'sh'
  public model =   new TableModel();
  isDataLoaded: boolean = false;


  constructor(
    private restClient : CommonService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.sortable) {
      for (let column of this.model.header) {
        column.sortable = changes.sortable.currentValue
      }
    }
  }

  ngOnInit(): void {
    const items$ = this.getAllProductList();
    const categories$ = this.getCategoryList();
    forkJoin([items$,categories$]).subscribe((data: any) => {
      console.log(data)
      //this.productList$.next(JSON.parse(JSON.stringify(data[0]["results"])));
      //this.categoryList$.next(JSON.parse(JSON.stringify(data[1]["results"])));
      this.productList$.next(data[0]["data"]);
      this.categoryList$.next(data[1]["data"]);
      this.fillCategoryToItemMap();
      this.prepareModelHeader();
      this.prepareModelData();
    });
  }

  prepareModelData() {
    //this.model['data'] = [];
    this.categoryList$.subscribe(categoriesData => {
      categoriesData.forEach(category => {
        if(this.categoryToItemsMap.hasOwnProperty(category.name)) {
          this.model.data.push([
            new TableItem({data: category.name}),
            new TableItem({data: this.categoryToItemsMap[category.name].i}),
            new TableItem({data: this.categoryToItemsMap[category.name].q}),
            new TableItem({data: this.getRandomArbitrary(0, 100)}),
            new TableItem({data: "1"})])
        } else {
          this.model.data.push([
            new TableItem({data: category.name}),
            new TableItem({data: 0}),
            new TableItem({data: 0}),
            new TableItem({data: 0}),
            new TableItem({data: "0"})])
        }
      });
      this.model.header[3]= new CustomHeaderItem({
        data: this.model.header[3].data,
        template: this.totalHeaderTemplate,
        className: "items-center"
      })
      this.model.data.map(data => {
        if(data.length !== 0) {
          data[2] = new TableItem({
            data: data[2].data,
            template: this.proficiencyTemplate,
            className: "items-center"
          })
          data[3] = new TableItem({
            data: data[3].data,
            template: this.totalTemplate,
            className: "items-center"
          })
          data[4] = new TableItem({
            data: data[4].data,
            template: this.onlineTemplate,
            className: "items-center"
          })
          return data
        }
      })
      this.isDataLoaded = true;
    })
  }

  prepareModelHeader() {
    this.model.header = [
      new TableHeaderItem({
        data: "Name",
        className: "items-center font-bold"
      }),
      new TableHeaderItem({
        data: "Items",
        className: "items-center"
      }),
      new TableHeaderItem({
        data: "Quantity",
        className: "items-center",
      }),
      new TableHeaderItem({
        data: "Total",
        className: "items-center",
      }),
      new TableHeaderItem({
        data: "Status",
        className: "items-center",
      })
    ]
  }

  fillCategoryToItemMap() {
    this.productList$.subscribe(items => {
      console.log(items)
      for (let k =0 ; k < items.length ; k++) {
        if (this.categoryToItemsMap.hasOwnProperty(items[k]["category"])) {
          this.categoryToItemsMap[items[k]["category"]]["i"] = this.categoryToItemsMap[items[k]["category"]]["i"] + 1;
          this.categoryToItemsMap[items[k]["category"]]["q"] = this.categoryToItemsMap[items[k]["category"]]["q"] + items[k]["qt"];
          this.categoryToItemsMap[items[k]["category"]]["items"].push(items[k]);
        } else {
          this.categoryToItemsMap[items[k]["category"]] = {
            "i" : 1,
            "q" : items[k]["qt"],
            "items" : [items[k]]
          }
        }
      }
      console.log("Category Map : ",this.categoryToItemsMap)
    })
  }

  getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  onChange1(event) {
    const tmp = getSizeFrom(event.value)
    this.size = tmp
  }


  onRowClick(index: number) {

  }

  simpleSort(index: number) {
    this.sort(this.model, index)
  }

  sort(model, index: number) {
    if (model.header[index].sorted) {
      // if already sorted flip sorting direction
      model.header[index].ascending = model.header[index].descending
    }
    model.sort(index)
  }

  /**
   * REST API calls
   */

  public getAllProductList() {
    return this.restClient.invokeDashboardService(RouteConstants.GET_ITEMS)
    //return this.http.get('./assets/data/Shop-product.json', { headers: this.headers });
  }

  public getCategoryList() {
    return this.restClient.invokeDashboardService(RouteConstants.GET_CATEGORIES)
    //return this.http.get('./assets/data/Shop-category.json', { headers: this.headers });
  }


}

class CustomHeaderItem extends TableHeaderItem {
  // used for custom sorting
  compare(one: TableItem, two: TableItem) {
    const stringOne = (one.data.name || one.data.surname || one.data).toLowerCase()
    const stringTwo = (two.data.name || two.data.surname || two.data).toLowerCase()

    if (stringOne > stringTwo) {
      return 1
    }
    else if (stringOne < stringTwo) {
      return -1
    }
    else {
      return 0
    }
  }
}


export interface ProductInfo {
  id: string;
  name: string;
  description: string;
  detail: string;
  category: string;
  img: string;
  gallery?: string[];
  onSale: boolean;
  costPrice: string;
  salePrice?: string;
  options?: DropdownItem[];
  inStock: boolean;
}

export interface CategoryInfo {
  name: string;
  redirect: string;
  count?: number;
  products?: ProductInfo[];
}

export interface DropdownItem {
  name: string;
  value: string;
}
