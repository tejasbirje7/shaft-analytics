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

  products =[];
  itemForm = new FormGroup({
    'name': new FormControl("",[Validators.required]),
    'category': new FormControl("",[Validators.required]),
    'costPrice' : new FormControl(0,[Validators.required]),
    'description' : new FormControl("",[Validators.required]),
    'qt': new FormControl(0),
    'options': new FormControl(''),
    'inStock': new FormControl(''),
    'onSale' : new FormControl('')
  });
  options = []
  inStock = [
    {id: true, content:"true"},
    {id: false, content:"false"}
  ]
  onSale =  [
    {id: true, content:"true"},
    {id: false, content:"false"}
  ]


  constructor(
    @Inject(MAT_DIALOG_DATA) public itemToBeViewed: any,
    private restClient: CommonService,
    private dialogRef: MatDialogRef<ItemsUpsertViewComponent>) {
  }

  ngOnInit(): void {
    this.patchValues();
  }

  onClose() {
    this.dialogRef.close(false)
  }

  patchValues(){
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
    this.options = this.itemToBeViewed.options;
    console.log("ItemsForm : ",this.itemForm.value);
  }


}
