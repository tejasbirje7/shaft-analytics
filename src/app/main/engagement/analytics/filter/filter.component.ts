import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../../../services/providers/common.service';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {ModalService} from '../../../../services/providers/modal.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  eventsMetaLoaded : boolean = false;
  needTriggerEvent : boolean= false;
  eventsMeta : any[];
  queryFormed;
  filterStrings = {
    'whoDid' : [],
    'didNot' : [],
    'commonProp' : []
  };
  filterName = new FormControl('', [Validators.required]);

  constructor(
    private restClient : CommonService,
    private _formBuilder: FormBuilder,
    private  modalService : ModalService) { }

  ngOnInit(): void {
    this.getEventsMeta();
  }

  getQuery(query) {
    console.log("Query emitted")
    this.queryFormed = query;
  }

  createFilters() {
    console.log("QueryFormed ",this.queryFormed);
    this.filterStrings = this.queryFormed["filterString"];
    const request = {};
    request['q'] = this.queryFormed['q'];
    request['te'] = this.queryFormed['te'];
    request['nm'] = this.filterName.value;
    request['fs'] = this.filterStrings;
    request['cid'] = this.jsDateToEpoch(new Date());
    let formData = new FormData();
    formData.append('analytics query', JSON.stringify(request));
    this.closeModal('filterName');
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  jsDateToEpoch(d) {
    return (d.getTime() - d.getMilliseconds()) / 1000;
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
