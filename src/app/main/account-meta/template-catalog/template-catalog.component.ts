import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CommonModalService} from '../../../services/providers/common-modal.service';
import {RouteConstants} from '../../../utils/constants/route-constants';
import {CommonService} from '../../../services/providers/common.service';
import {GlobalfieldsService} from '../../../services/app_cache/globalfields.service';

@Component({
  selector: 'app-template-catalog',
  templateUrl: './template-catalog.component.html',
  styleUrls: ['./template-catalog.component.scss']
})
export class TemplateCatalogComponent implements OnInit {

  templates : any[];
  categoryToTemplateMapping : any = {};

  constructor(
    //private router : Router,
    private modal : CommonModalService,
    private globalFieldService: GlobalfieldsService,
    private restClient : CommonService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this._getTemplateCatalog();
  }

  populateCategoryToTemplateMap(){
    this.templates.forEach(template => {
      if(this.categoryToTemplateMapping.hasOwnProperty(template.cg)) {
        this.categoryToTemplateMapping[template.cg].push(template);
      } else {
        this.categoryToTemplateMapping[template.cg] = [template];
      }
    })
    console.log("CG to template map ",this.categoryToTemplateMapping);
  }

  onSelectItem(item) {
    this.modal.viewTemplateDemo(item).afterClosed().subscribe(data => {
      this.globalFieldService.setAccountId(data["accountId"]);
      console.log("Data in Modal ",data);
      if(this.globalFieldService.isAccountIdSet()) {
        this.router.navigateByUrl('/app/configure?id=' + item.id );
      } else {
        // #TODO Error popup saying to select template first before configuring
        console.error("Template not selected. Account ID not set");
      }
    });
  }

  _getTemplateCatalog() {
    this.restClient.invokeDashboardService(RouteConstants.TEMPLATES_CATALOG,{})
      .subscribe(res => {
        let r = JSON.parse(JSON.stringify(res));
        if(r.hasOwnProperty("code") && (String(r["code"])).startsWith("S")) {
          console.log("Templates Catalog : ",r["data"])
          this.templates = r['data'];
          this.populateCategoryToTemplateMap();
        }
      }, (err) => {
        console.log(err);
      });
  }

}
