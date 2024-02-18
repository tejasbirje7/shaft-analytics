import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TemplateModalData} from '../../../utils/interfaces/template-interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-template-catalog-modal',
  templateUrl: './template-catalog-modal.component.html',
  styleUrls: ['./template-catalog-modal.component.scss']
})
export class TemplateCatalogModalComponent implements OnInit {
  storeName = "";
  previewImages = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public modalData : TemplateModalData,
    private router : Router,
    private templateDemoComponentMatDialogRef : MatDialogRef<TemplateCatalogModalComponent>
  ) { }

  ngOnInit(): void {
    console.log("Modal Data ",this.modalData)
    this.storeName = this.modalData['name'];
    this.previewImages = this.modalData['preview']
  }

  onClose() {
    this.templateDemoComponentMatDialogRef.close('close');
  }

  onConfigure() {
    this.templateDemoComponentMatDialogRef.close('configure');
    //this.router.navigate(['app/configure',this.modalData['id']])
  }

}
