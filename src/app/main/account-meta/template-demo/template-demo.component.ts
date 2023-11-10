import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TemplateModalData} from '../../../utils/interfaces/template-interfaces';

@Component({
  selector: 'app-template-demo',
  templateUrl: './template-demo.component.html',
  styleUrls: ['./template-demo.component.scss']
})
export class TemplateDemoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public modalData : TemplateModalData,
    private templateDemoComponentMatDialogRef : MatDialogRef<TemplateDemoComponent>
  ) { }

  ngOnInit(): void {
    console.log("Modal Data ",this.modalData)
  }

  onClose() {
    this.templateDemoComponentMatDialogRef.close();
  }

}
