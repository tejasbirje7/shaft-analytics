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

export interface ItemToBeViewed {
  id : String
  name : String;
  category : any;
  costPrice : Number;
  description : String;
  qt : Number;
  options : [];
  inStock : boolean;
}

export interface ModalData {
  add : boolean;
  itemToBeViewed: any;
  categories: any;

}

export interface campaignDetails {
  rowData : [];
  campaignDetails : [];

}
