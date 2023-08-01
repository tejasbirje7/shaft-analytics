import { Component, OnInit } from '@angular/core';
import {AppTab} from '../../../../../@shaft-components';

@Component({
  selector: 'app-template-layout',
  templateUrl: './template-layout.component.html',
  styleUrls: ['./template-layout.component.scss']
})
export class TemplateLayoutComponent implements OnInit {


  public tabs: AppTab[] = [
    {
      name: 'Images',
      url: '/app/template/images',
    },
    {
      name: 'Page Contents',
      url: '/app/template/pages-contents',
    },
    {
      name: 'Credit card',
      url: '/app/user/creditcard',
    },
    {
      name: 'Transactions',
      url: '/app/user/transactions',
    },
    /*
    {
      name: 'VIP Area',
      disabled: true,
    }*/
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
