import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {TemplateModalData} from '../../../utils/interfaces/template-interfaces';
import {TemplateConstants} from '../../../utils/constants/template-constants';

@Component({
  selector: 'app-template-configure-modal',
  templateUrl: './template-configure-modal.component.html',
  styleUrls: ['./template-configure-modal.component.scss']
})
export class TemplateConfigureModalComponent implements OnInit {
  type: String;
  file:boolean;
  input:boolean;
  select:boolean;
  radio:boolean;
  responseObj = {};
  radioValue: boolean;
  radioOptions = [true,false]
  list: boolean;
  componentForm: FormGroup;
  componentFields: FormArray;
  private uploadedFiles: any;
  multiFile: boolean;
  inputText: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public modalData : TemplateModalData,
    private _formBuilder: FormBuilder,
    private templateDialog : MatDialogRef<TemplateConfigureModalComponent>) { }

  ngOnInit(): void {
    console.log("Modal Data ",this.modalData)
    this.componentForm = this._formBuilder.group({
      componentFields: this._formBuilder.array([ this.createComponentFields() ])
    });
    this.type = this.modalData.fields.type;
    if(this.type == TemplateConstants.FILE_TYPE) {
      this.file = true;
      if(this.modalData.fields.mode == 'multi') {
        this.multiFile = true;
      }
    }  else if (this.type == TemplateConstants.INPUT_TYPE) {
      this.input = true;
    } else if(this.type == TemplateConstants.RADIO_TYPE) {
      this.radio = true;
    } else if(this.type == TemplateConstants.LIST_TYPE) {
      this.list = true;
    }
  }

  createComponentFields(): FormGroup {
    return this._formBuilder.group({
      description: [""],
    });
  }

  addItem(): void {
    this.componentFields = this.componentForm.get('componentFields') as FormArray;
    this.componentFields.push(this.createComponentFields());
  }

  submitData(responseObj) {
    this.templateDialog.close(responseObj);
  }

  fileUploaded(event) {
    console.log("Files Uploaded : ",event);
    this.uploadedFiles = event;
  }

  closeModal(){
    this.submitData(this.responseObj);
  }

  onSubmit(){
    this.responseObj['modalData'] = this.modalData;
    if(this.radio) {
      this.responseObj['response'] = this.radioValue;
    } else if(this.list) {
      this.responseObj['response'] = this.componentForm.value.componentFields;
    } else if(this.file) {
      this.responseObj['response'] = Array.from(this.uploadedFiles.values());
    } else if(this.input) {
      this.responseObj['response'] = this.inputText;
    }
    this.submitData(this.responseObj);
  }

}



