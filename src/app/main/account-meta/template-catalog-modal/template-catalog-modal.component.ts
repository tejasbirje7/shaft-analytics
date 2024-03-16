import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TemplateModalData} from '../../../utils/interfaces/template-interfaces';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CommonService} from '../../../services/providers/common.service';
import {RouteConstants} from '../../../utils/constants/route-constants';

@Component({
  selector: 'app-template-catalog-modal',
  templateUrl: './template-catalog-modal.component.html',
  styleUrls: ['./template-catalog-modal.component.scss']
})
export class TemplateCatalogModalComponent implements OnInit {
  storeName = "";
  previewImages = [];
  routeToConfigureScreen = false;
  templateForm = new FormGroup({
    'name': new FormControl("",[Validators.required])
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public modalData : TemplateModalData,
    private router : Router,
    private restClient: CommonService,
    private templateDemoComponentMatDialogRef : MatDialogRef<TemplateCatalogModalComponent>
  ) { }

  ngOnInit(): void {
    console.log("Modal Data ",this.modalData)
    this.storeName = this.modalData['name'];
    this.previewImages = this.modalData['preview']
  }

  onClose(dataToSent) {
    this.templateDemoComponentMatDialogRef.close(dataToSent);
  }

  afterTemplateSelected() {
    this.routeToConfigureScreen = true;
  }

  onConfigure() {
    if(this.templateForm.valid) {
      const requestBody = {
        "accountName": this.templateForm.value.name,
        "templateId": this.modalData["templateId"]
      }
      console.log("Request Body ",requestBody);
      this._bootstrapAccount(requestBody);
    }
    // this.templateDemoComponentMatDialogRef.close('configure');
    //this.router.navigate(['app/configure',this.modalData['id']])
  }

  _bootstrapAccount(accountDetails){
    return this.restClient.invokeDashboardService(RouteConstants.BOOTSTRAP_ACCOUNT,accountDetails)
      .subscribe(res => {
        let r = JSON.parse(JSON.stringify(res));
        if(r.hasOwnProperty("code") && (String(r["code"])).startsWith("S")) {
          this.onClose(r["data"]);
        }
      }, (err) => {
        console.log(err);
      });
  }


}
