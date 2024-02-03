import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CommonService} from '../../../services/providers/common.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ItemToBeViewed, ModalData} from '../../../utils/interfaces/store-interfaces';
import {CategoryUpsertViewComponent} from '../category-upsert-view/category-upsert-view.component';
import {RouteConstants} from '../../../utils/constants/route-constants';

@Component({
  selector: 'app-orders-view',
  templateUrl: './items-upsert-view.component.html',
  styleUrls: ['./items-upsert-view.scss']
})
export class ItemsUpsertViewComponent implements OnInit {

  itemForm = new FormGroup({
    'name': new FormControl("",[Validators.required]),
    'category': new FormControl("",[Validators.required]),
    'discountedPrice': new FormControl(0,[Validators.required]),
    'costPrice' : new FormControl(0,[Validators.required]),
    'description' : new FormControl("",[Validators.required]),
    'qt': new FormControl(0),
    'options': new FormControl([]),
    'inStock': new FormControl(''),
    'onSale' : new FormControl('')
  });

  multiFile: boolean;
  inStock = [ true, false ];
  onSale =  [ true, false];
  options : String[] =  ['xs','s','m','l','xl'];
  isOptionsRequired = true;
  isInStockRequired = true;
  isQuantityRequired = true;
  itemToBeViewed : ItemToBeViewed;
  categories
  private uploadedFiles: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public modalData: ModalData,
    private restClient: CommonService,
    private itemDialog : MatDialogRef<ItemsUpsertViewComponent>
  ) {}

  ngOnInit(): void {
    console.log("Modal Data ",this.modalData)
    this.categories = this.modalData.categories;
    if(this.modalData.add) {
      this.itemForm.reset();
    } else {
      this.patchValues();
    }
  }

  onClose() {
    this.itemDialog.close(false)
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
      inStock: this.itemToBeViewed.inStock
    });
    this.options = this.itemToBeViewed.options;
  }

  onSubmit() {
    console.log("Item form : ",this.itemForm.value);
    let itemDetails = {};
    itemDetails = this.itemForm.value;
    if(this.itemToBeViewed?.id != undefined) {
      itemDetails['id'] = this.itemToBeViewed["id"] ;
    }
    let formData = new FormData();
    this.uploadedFiles.forEach((file) => {
      formData.append('files',file.file,file.file.name);
      itemDetails['img'] = file.file.name
    })
    formData.append('itemDetails', JSON.stringify(itemDetails));
    console.log("File Data : ",formData);
    this._addItem(formData)
  }

  onDelete() {
    console.log("Deleting item");
    var requestData = {};
    requestData["id"] = this.itemToBeViewed["id"];
    this._deleteItem(requestData)
  }

  fileUploaded(event) {
    console.log("Files Uploaded : ",event);
    this.uploadedFiles = event;
  }

  _addItem(formData){
    return this.restClient.invokeDashboardService(RouteConstants.SAVE_ITEM,formData)
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      });
  }

  _updateItem(formData){
    return this.restClient.invokeDashboardService(RouteConstants.UPDATE_ITEM,formData)
      .subscribe(res => {
      }, (err) => {
        console.log(err);
      });
  }

  _deleteItem(formData){
    return this.restClient.invokeDashboardService(RouteConstants.DELETE_ITEM,formData)
      .subscribe(res => {
        this.itemDialog.close();
      }, (err) => {
        console.log(err);
      });
  }

  /*
    addItem(){
    if(this.getFileName() && this.itemForm.status){
      let itemDetails = {};
      itemDetails = this.itemForm.value;
      let formData = new FormData();
      let files = this.fileField.getFiles();
      files.forEach((file) => {
        formData.append('files', file.rawFile, file.name);
        itemDetails['img'] = file.name;
      });
      if (this.editMode) {
        itemDetails['id'] = this.selectedItem.id;
        formData.append('itemDetails', JSON.stringify(itemDetails));
        this._updateItem(formData);
        this.editMode = false;
        this.selectedItem = {};
      } else {
        formData.append('itemDetails', JSON.stringify(itemDetails));
        this._saveItems(formData)
      }
      this.closeModal('item');
      this.catFormSubmitted = false;
    } else{
      this.catFormSubmitted = true;
    }
  }
   */

}
