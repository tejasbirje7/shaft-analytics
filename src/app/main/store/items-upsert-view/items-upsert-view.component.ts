import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CommonService} from '../../../services/providers/common.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-orders-view',
  templateUrl: './items-upsert-view.component.html',
  styleUrls: ['./items-upsert-view.scss']
})
export class ItemsUpsertViewComponent implements OnInit {

  itemForm = new FormGroup({
    'name': new FormControl("",[Validators.required]),
    'category': new FormControl("",[Validators.required]),
    'costPrice' : new FormControl(0,[Validators.required]),
    'description' : new FormControl("",[Validators.required]),
    'qt': new FormControl(0),
    'options': new FormControl([]),
    'inStock': new FormControl(''),
    'onSale' : new FormControl('')
  });
  inStock = [ true, false ];
  onSale =  [ true, false];
  sizeList: [];
  isSizeOptionsRequired = false;
  isInStockRequired = true;
  isOnSaleRequired = true;
  isQuantityRequired = true;
  itemToBeViewed : ItemToBeViewed;
  categories



  constructor(
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    private restClient: CommonService,
    private dialogRef: MatDialogRef<ItemsUpsertViewComponent>) {
  }

  ngOnInit(): void {
    console.log("Modal Data ",this.modalData)
    this.categories = this.modalData.categories;
    this.patchValues();
  }

  onClose() {
    this.dialogRef.close(false)
  }

  patchValues(){
    this.itemToBeViewed = this.modalData.itemToBeViewed;
    this.itemForm.patchValue({
      name : this.itemToBeViewed.name,
      category : this.itemToBeViewed.category,
      costPrice : this.itemToBeViewed.costPrice,
      description : this.itemToBeViewed.description,
      qt : this.itemToBeViewed.qt,
      options : this.itemToBeViewed.options,
      inStock: this.itemToBeViewed.inStock,
      onSale: this.itemToBeViewed.onSale
    });
    this.sizeList = this.itemToBeViewed.options;
  }

  onSubmit() {
    console.log("Item form : ",this.itemForm.value);
  }
}

export interface ItemToBeViewed {
  name : String;
  category : any;
  costPrice : Number;
  description : String;
  qt : Number;
  options : [];
  inStock : boolean;
  onSale : boolean
}
