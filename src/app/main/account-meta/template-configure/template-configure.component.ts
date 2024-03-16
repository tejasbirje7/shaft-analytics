import { Component, OnInit } from '@angular/core';
import {CommonModalService} from '../../../services/providers/common-modal.service';
import {TemplateModalData} from '../../../utils/interfaces/template-interfaces';
import {ActivatedRoute, Router} from '@angular/router';
import {RouteConstants} from '../../../utils/constants/route-constants';
import {CommonService} from '../../../services/providers/common.service';
import {GlobalfieldsService} from '../../../services/app_cache/globalfields.service';


@Component({
  selector: 'app-template-configure',
  templateUrl: './template-configure.component.html',
  styleUrls: ['./template-configure.component.scss']
})
export class TemplateConfigureComponent implements OnInit {
  public configuredTemplate : any = {};

  constructor(
    private route : ActivatedRoute,
    private restClient : CommonService,
    private router : Router,
    private globalFieldService : GlobalfieldsService,
    private modal : CommonModalService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if(this.globalFieldService.isAccountIdSet()) {
        this._getTemplateConfiguration();
      } else {
        // #TODO popup should be appear that template not selected to be configured
        if(params.hasOwnProperty("id")) {
          console.log("Params : ",params);
        } else {
          console.log("Routed manually");
          // #TODO Do a network call to fetch template ID for the shop and fetch configuration options
        }
      }
    });
  }

  addTemplateComponent(fields : any,faqIndex,childIndex) {
    console.log("Fields",fields);
    console.log("faqIndex",faqIndex);
    console.log("childIndex",childIndex);
    let modalData = {} as TemplateModalData;
    modalData.fields = fields;
    modalData.faqIndex = faqIndex;
    modalData.childIndex = childIndex;
    this.onView(modalData);
  }

  onView(modalData: TemplateModalData) {
    this.modal.addTemplateOption(modalData).afterClosed().subscribe(data => {
      console.log("Data in Modal ",data);
      console.log("configuredTemplate ",this.configuredTemplate);
      if(Object.keys(data).length > 0) {
        const modalData = data.modalData;
        this.configuredTemplate.templateOptions[modalData.faqIndex].children[modalData.childIndex].content = data.response;
        console.log(this.configuredTemplate)
      }
    })
  }

  onOptionsSubmit() {
    console.log("FAQ : 2 ",this.configuredTemplate);
    let templateBlobs = {};
    let formData = new FormData();
    this.configuredTemplate.templateOptions.forEach((group) => {
      templateBlobs[group.groupName] = {};
      group.children.forEach(child => {
        if(child.fields.type === 'file') {
          let content = []
          let title = child.title
          child.content.forEach((file)  => {
            formData.append(file.file.name,file.file,file.file.name);
            if(templateBlobs[group.groupName].hasOwnProperty(title)) {
              templateBlobs[group.groupName][title].push(file.file.name)
            } else {
              templateBlobs[group.groupName][title] =  [file.file.name]
            }
            content.push({file : { name : file.file.name }});
          })
          child.content = content;
        }
      })
    });
    formData.append('templateBlobs', JSON.stringify(templateBlobs));
    formData.append('configuredTemplate',JSON.stringify(this.configuredTemplate));
    console.log("File Data : ",formData);
    this._updateTemplateConfiguration(formData);
  }

  _getTemplateConfiguration() {
    this.restClient.invokeDashboardService(RouteConstants.GET_TEMPLATE_CONFIG,{})
      .subscribe(res => {
        let r = JSON.parse(JSON.stringify(res));
        if(r.hasOwnProperty("code") && (String(r["code"])).startsWith("S")) {
          console.log("Templates Catalog : ",r["data"])
          this.configuredTemplate = r['data'][0];
        }
      }, (err) => {
        console.log(err);
      });
  }

  _updateTemplateConfiguration(formData) {
    this.restClient.invokeDashboardService(RouteConstants.UPDATE_TEMPLATE_CONFIG,formData)
      .subscribe(res => {
        let r = JSON.parse(JSON.stringify(res));
        if(r.hasOwnProperty("code") && (String(r["code"])).startsWith("S")) {
          console.log("Templates Catalog : ",r["data"])
          // this.configuredTemplate = r['data'][0];
        }
      }, (err) => {
        console.log(err);
      });
  }
}
