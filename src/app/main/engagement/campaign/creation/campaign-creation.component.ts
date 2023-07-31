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

  needTriggerEvent : boolean= true;
  eventsMetaLoaded : boolean = false;
  eventsMeta : any[];
  step : number = 0;
  queryFormed;
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
  filterForm: FormGroup;

  constructor(
    private restClient : CommonService,
    private _formBuilder: FormBuilder,
    private  modalService : ModalService) { }

  ngOnInit(): void {
    this.getEventsMeta();
    this.filterForm = this._formBuilder.group({
      queryBuilder: new FormArray([])
    });
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
    console.log("QueryFormed ",this.queryFormed)
    this.filterStrings = this.queryFormed["filterString"];
    const request = {};
    request['q'] = this.queryFormed['q'];
    request['te'] = this.queryFormed['te'];
    request['nm'] = this.filterName.value;
    request['fs'] = this.filterStrings;
    request['cid'] = this.jsDateToEpoch(new Date());
    this.saveTarget(request).then(r => {
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
        this.eventsMeta = r.data;
        this.eventsMetaLoaded = true;
      }, (err) => {
        console.log(err);
      });
  }

}
