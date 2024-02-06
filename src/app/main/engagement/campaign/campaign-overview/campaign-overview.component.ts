import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {campaignDetails, ModalData} from '../../../../utils/interfaces/store-interfaces';
import charts from '../../../../../@shaft-components/data/charts'

@Component({
  selector: 'app-campaign-overview',
  templateUrl: './campaign-overview.component.html',
  styleUrls: ['./campaign-overview.component.scss']
})
export class CampaignOverviewComponent implements OnInit {
  filterStrings = {
    'whoDid' : [],
    'didNot' : [],
    'commonProp' : []
  };

  public charts = charts

  constructor(@Inject(MAT_DIALOG_DATA) public modalData: campaignDetails) { }

  ngOnInit(): void {
    console.log("Modal Data ",this.modalData);
    this.filterStrings = this.modalData.campaignDetails["fs"];
  }

  onSubmit(){

  }

}
