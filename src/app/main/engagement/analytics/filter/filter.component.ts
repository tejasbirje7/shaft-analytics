import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../../../services/providers/common.service';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {ModalService} from '../../../../services/providers/modal.service';
import charts from '../../../../../@shaft-components/data/charts'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filterStringsLoaded = false;
  userCount = 0;
  eventCount = 0;
  public charts = [];
  eventsMetaLoaded : boolean = false;
  needTriggerEvent : boolean= false;
  eventsMeta : any[];
  propsMeta: any[];
  queryFormed;
  from :string = "";
  to: string = "";
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

  evaluateQuery() {
    console.log("Query Formed ",this.queryFormed)
    this.filterStrings = this.queryFormed.filterString;
    const request = {};
    request['q'] = this.queryFormed['q'];
    console.log("QueryFormed ",request);
    // this.closeModal('filterName');
    this.getQueryResults(request)
  }
  jsDateToEpoch(d) {
    return (d.getTime() - d.getMilliseconds()) / 1000;
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

  getQueryResults(query) {
    this.restClient.invokeDashboardService("reporting/query/results",query)
      .subscribe(res => {
        let r = JSON.parse(JSON.stringify(res));
        console.log("Query Results ",r);
        let evtCount = 0
        let responseData = r.data.data
        let graphData = [];
        let graphAxis = [];
        let events = responseData.events
        events.forEach(bucket => {
          evtCount = bucket.u + evtCount;
          graphData.push(bucket.u);
          graphAxis.push(this.epochToJsDate(bucket.from))
        })
        this.from = this.epochToJsDate(events[0].from);
        this.to = this.epochToJsDate(events[events.length - 1].to);
        this.eventCount = evtCount;
        this.userCount = responseData.user
        this.charts = [];
        this.charts.push({
          xAxis: {
            type: 'category',
            data: graphAxis
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: graphData,
            type: 'line',
            smooth: true,
            label: {
              show: true,
              position: 'top',
              textStyle: {
                fontSize: 15
              }
            }
          }]
        })
      }, (err) => {
        console.log(err);
      });
  }

  epochToJsDate(ts) {
    return new Date(ts * 1000).toLocaleDateString();
  }

  dateFormatter(date) {
    const d = new Date(date);
    return d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear();
  }

}
