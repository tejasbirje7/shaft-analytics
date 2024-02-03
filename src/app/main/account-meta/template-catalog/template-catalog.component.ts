import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TemplateModalData} from '../../../utils/interfaces/template-interfaces';
import {CommonModalService} from '../../../services/providers/common-modal.service';

@Component({
  selector: 'app-template-catalog',
  templateUrl: './template-catalog.component.html',
  styleUrls: ['./template-catalog.component.scss']
})
export class TemplateCatalogComponent implements OnInit {

  categoryMap : any = {};

  constructor(
    //private router : Router,
    private modal : CommonModalService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.categoryMap = {
      'Snack delivery services' : [
        {
          id : 'BIO84398HF0H09DF-09JF-9HVNF89VU',
          img : 'assets/img/avatar/avatar2.jpg',
          name :'Khamang',
          costPrice:'300'
        }]
    }
    console.log("Category Map : ",this.categoryMap);
  }

  onSelectItem(item) {
    this.modal.viewTemplateDemo(item).afterClosed().subscribe(data => {
      console.log("Data in Modal ",data);
      this.router.navigateByUrl('/app/configure?id=' + item.id );
    });
  }

  // onView(modalData: TemplateModalData) {
  //   this.modal.addTemplateOption(modalData).afterClosed().subscribe(data => {
  //     console.log("Data in Modal ",data);
  //     //console.log(this.faq[data.modalData.faqIndex]);
  //     const modalData = data.modalData;
  //     this.faq2[modalData.faqIndex].children[modalData.childIndex].content = data.response;
  //     console.log(this.faq2)
  //   })
  // }

}
