import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../../services/providers/common.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ModalService} from '../../../../services/providers/modal.service';
@Component({
  selector: 'app-campaign',
  templateUrl: './campaign-creation.component.html',
  styleUrls: ['./campaign-creation.component.scss']
})
export class CampaignCreationComponent implements OnInit {

  private uploadedFiles: any;
  multiFile: boolean;
  needTriggerEvent : boolean= true;
  eventsMetaLoaded : boolean = false;
  eventsMeta : any[];
  propsMeta : any[];
  step : number = 0;
  queryFormed;
  campaignTypes = [
    {
      "tgtType" : "In-app",
      "tgtValue" : 1
    },
    {
      "tgtType" : "WhatsApp",
      "tgtValue" : 2
    },
    {
      "tgtType" : "Email",
      "tgtValue" : 3
    },
    {
      "tgtType" : "SMS",
      "tgtValue" : 4
    },
    {
      "tgtType" : "Facebook Ads",
      "tgtValue" : 5
    },
  ]
  campaignMode = [
    {
      "mode" : "PBS",
      "value" : 0
    },
    {
      "mode" : "Online",
      "value" : 1
    }
  ]
  displayFilter: any = {};
  filterStrings = {
    'whoDid' : [],
    'didNot' : [],
    'commonProp' : []
  };
  searchFilter: any = '';
  visibleIndex = -1;
  savedFilters: any = [{'nm': 'Tejas'}];
  filterName = new FormControl('', [Validators.required]);
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  selectedCampaignType: any;
  selectedCampaignMode: any;

  constructor(
    private restClient : CommonService,
    private _formBuilder: FormBuilder,
    private  modalService : ModalService) { }

  ngOnInit(): void {
    this.getEventsMeta();
    this.eventsMetaLoaded = true;
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  getQuery(query) {
    console.log("Inside get query")
    this.queryFormed = query;
  }

  createFilters() {
    console.log("QueryFormed ",this.queryFormed, " Campaign type ",this.selectedCampaignType);
    this.filterStrings = this.queryFormed["filterString"];
    const request = {};
    request['q'] = this.queryFormed['q'];
    request['te'] = this.queryFormed['te'];
    request['nm'] = this.filterName.value;
    request['fs'] = this.filterStrings;
    request['cid'] = this.jsDateToEpoch(new Date());
    request['type'] = this.selectedCampaignType.tgtValue;
    request['mode'] = this.selectedCampaignMode.value;
    let formData = new FormData();
    this.uploadedFiles.forEach((file) => {
      formData.append('files',file.file,file.file.name);
      request['img'] = file.file.name
    })
    formData.append('campaignDetails', JSON.stringify(request));
    this.saveTarget(formData).then(r => {
      this.closeModal('filterName');
      // To be removed
      this.displayFilter = request;
    });
  }

  /*******************
   * FORM CONTROLS
   *******************/

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  jsDateToEpoch(d) {
    return (d.getTime() - d.getMilliseconds()) / 1000;
  }


  /******************
   *  SERVICE CALLS
   ******************/


  async saveTarget(target: any) {
    await this.restClient.invokeDashboardService('marketing/save/campaign', target)
      .subscribe(res => {
        console.log(res)
      }, (err) => {
        console.log(err);
      });
  }


  getEventsMeta() {
    this.restClient.invokeDashboardService("account/meta/events")
      .subscribe(res => {
        let r = JSON.parse(JSON.stringify(res));
        this.eventsMeta = r.data.eventsMeta;
        this.propsMeta = r.data.propsMeta;
        this.eventsMetaLoaded = true;
      }, (err) => {
        console.log(err);
      });
  }

  fileUploaded(event) {
    console.log("Files Uploaded : ",event);
    this.uploadedFiles = event;
  }

}
