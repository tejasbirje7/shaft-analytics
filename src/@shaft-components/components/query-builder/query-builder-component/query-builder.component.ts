import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import {ModalService} from '../../../../app/services/providers/modal.service';

@Component({
  selector: 'app-query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.scss'],
})
export class QueryBuilderComponent implements OnInit {
  @Input() triggerEvent: boolean;
  @Input() eventsMeta: [];
  @Output() onChange = new EventEmitter();

  isLinear = false;
  filterType: string;
  isModeEdit = false;
  editIndex: number;
  whoDidFilter = [];
  whoDidntFilter = [];
  commonProp = [];
  filterForm: FormGroup;
  filterFormSubmitted = false;
  filterStrings = {
    'whoDid': [],
    'didNot': [],
    'commonProp': []
  };
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  performedEvents = [];
  propsMap = {};
  prop = [];
  operators = [
    {label: 'equal', nm: 'EQ'},
    {label: 'not equal', nm: 'NE'},
    {label: 'greater', nm: 'GT'},
    {label: 'greater than equal to', nm: 'GTE'},
    {label: 'less than', nm: "LT"},
    {label: 'less than equal to', nm: "LTE"}
  ];
  triggerEventForm: FormGroup;
  triggerEventString = "";

  constructor(
    private modal: ModalService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.performedEvents = this.eventsMeta;
    this.filterForm = this._formBuilder.group({
      queryBuilder: new FormArray([])
    });
    this.triggerEventForm = this._formBuilder.group({
      e: [-1, Validators.required],
      fe: [false],
      o: [''],
      f: [''],
      v: [''],
    });
    this.createPropsMap();
  }

  createTriggerEvtString(triggerEventInfo: any) {
    if (Object.keys(triggerEventInfo).length > 0) {
      this.triggerEventString = "As soon as user does " + this.performedEvents[triggerEventInfo['e']]['nm'];
      if (triggerEventInfo['fe']) {
        this.triggerEventString += " where " + this.getPropsName(triggerEventInfo['f'], this.propsMap[triggerEventInfo['e']]) + " " + this.getOperatorName(triggerEventInfo['o']) + " " + triggerEventInfo['v'];
      }
    }
  }

  triggerEventTransaction(mode) {
    if (mode == 'add') {
      this.openModal("triggerEvent");
    } else if (mode == 'edit') {
      this.openModal("triggerEvent");
    } else if (mode == 'submit') {
      this.createTriggerEvtString(this.triggerEventForm.value);
      this.closeModal("triggerEvent");
    }
  }

  createPropsMap() {
    for (var i = 0; i < this.performedEvents.length; i++) {
      var event: any = this.performedEvents[i];
      this.propsMap[event['eid']] = event['props']
    }
  }

  filterAction(mode, filterType = undefined, index = undefined) {
    filterType != undefined ? this.filterType = filterType : undefined;
    if (mode === 'edit') {
      this.isModeEdit = true;
      this.editIndex = index;
      this.onReset();
      const f = this.getSpecificFilter(index);
      for (let j = 0; j < f.length; j++) {
        this.t.push(this._formBuilder.group({
          e: [f[j]['e'], Validators.required],
          fe: [f[j]['fe']],
          o: [f[j]['o']],
          f: [f[j]['f']],
          v: [f[j]['v']],
          sT: [f[j]['sT']],
          eT: [f[j]['eT']]
        }));
      }
      this.openModal('filter');
    } else if (mode === 'submit') {
      this.filterFormSubmitted = true;
      if (this.filterForm.invalid) {
        return;
      }
      var filter = this.filterForm.value.queryBuilder;
      if (this.isModeEdit) {
        this.pushSpecificFilter(filter, this.editIndex);
        this.isModeEdit = false;
        this.editIndex = null;
      } else {
        this.pushSpecificFilter(filter);
      }
      this.closeModal('filter');
      this.filterForm.reset();
      this.filterForm.clearValidators();
    } else {
      this.onReset();
      this.addQuery();
      this.openModal('filter');
    }
  }

  cancelQueryAdd(modalId) {
    this.onReset();
    this.addQuery();
    this.closeModal(modalId);
  }

  pushSpecificFilter(filter, index = undefined) {
    filter = this.transFormFilter(filter, 'push');
    if (this.filterType === 'whoDid') {
      index != undefined ? this.whoDidFilter[index] = filter : this.whoDidFilter.push(filter);
    } else if (this.filterType === 'didNot') {
      index != undefined ? this.whoDidntFilter[index] = filter : this.whoDidntFilter.push(filter);
    } else if (this.filterType === 'commonProp') {
      index != undefined ? this.commonProp[index] = filter : this.commonProp.push(filter);
    }
  }

  transFormFilter(filter, mode) {
    if (this.filterType === 'commonProp') return filter;
    for (let i = 0; i < filter.length; i++) {
      if (mode === 'push') { // Using jsDateToEpoch
        filter[i]['sT'] = this.jsDateToEpoch(filter[i]['sT']);
        filter[i]['eT'] = this.jsDateToEpoch(filter[i]['eT']);
      } else { // Using epochToJS
        filter[i]['sT'] = this.epochToJsDate(filter[i]['sT']);
        filter[i]['eT'] = this.epochToJsDate(filter[i]['eT']);

      }
      const eventObj = this.propsMap[filter[i].e];
      for (let j = 0; j < eventObj.length ; j++) {
        if(eventObj[j].nm === filter[i].f) {
          filter[i]['dt'] = eventObj[j].dt;
        }
      }
    }
    return filter
  }

  getSpecificFilter(index) {
    if (this.filterType === 'whoDid') {
      return this.transFormFilter(this.whoDidFilter[index], 'pop');
    } else if (this.filterType === 'didNot') {
      return this.transFormFilter(this.whoDidntFilter[index], 'pop');
    } else if (this.filterType === 'commonProp') {
      return this.commonProp[index]
    }
  }

  createFilters() {
    let request = {'q': {}};
    request['q']['whoDid'] = this.whoDidFilter;
    request['q']['didNot'] = this.whoDidntFilter;
    request['q']['commonProp'] = this.commonProp;
    request['filterString'] = this.createFilterString(request);
    request['te'] = this.triggerEventForm.value;
    this.onChange.emit(request);
  }

  createFilterString(filter: any) {
    this.filterStrings = {
      'whoDid': [],
      'didNot': [],
      'commonProp': []
    };
    for (var i = 0; i < filter['q']['whoDid'].length; i++) {
      var f = filter['q']['whoDid'][i];
      for (var j = 0; j < f.length; j++) {
        if (f[j]['fe']) {
          this.filterStrings['whoDid'].push(this.getEventName(f[j]['e']) + ' where ' + this.getPropsName(f[j]['f'],this.propsMap[f[j]['e']]) + ' is ' + this.getOperatorName(f[j]['o']) + ' ' + f[j]['v']);
        } else {
          this.filterStrings['whoDid'].push(this.getEventName(f[j]['e']));
        }
      }
    }
    for (var i = 0; i < filter['q']['didNot'].length; i++) {
      var f = filter['q']['didNot'][i];
      for (var j = 0; j < f.length; j++) {
        if (f[j]['fe']) {
          this.filterStrings['didNot'].push(this.getEventName(f[j]['e']) + ' where ' + this.getPropsName(f[j]['f'],this.propsMap[f[j]['e']]) + ' is ' + this.getOperatorName(f[j]['o']) + ' ' + f[j]['v']);
        } else {
          this.filterStrings['didNot'].push(this.getEventName(f[j]['e']));
        }
      }
    }
    for (var i = 0; i < filter['q']['commonProp'].length; i++) {
      var f = filter['q']['commonProp'][i];
      for (var j = 0; j < f.length; j++) {
        if (f[j]['fe']) {
          this.filterStrings['commonProp'].push(this.getEventName(f[j]['e']) + ' where ' + this.getPropsName(f[j]['f'],this.propsMap[f[j]['e']]) + ' is ' + this.getOperatorName(f[j]['o']) + ' ' + f[j]['v']);
        } else {
          this.filterStrings['commonProp'].push(this.getEventName(f[j]['e']));
        }
      }
    }
    return this.filterStrings;
  }

  getEventName(e): string {
    let returnObj: string = "";
    this.performedEvents.filter(item => {
      if (item.eid == e) {
        returnObj = item.nm
      }
    });
    return returnObj
  }

  populateProps($event, index) {
    if (index < this.prop.length) {
      this.prop[index] = this.propsMap[$event.value]
    }
    this.prop.push(this.propsMap[$event.value]);
  }

  getPropsName(p, props = []): string {
    var returnObj: string = "";
    props.filter((item) => {
      if (item.nm == p) {
        returnObj = item.nm
      }
    });
    return returnObj
  }

  getOperatorName(op): string {
    var returnObj: string = "";
    this.operators.filter((item) => {
      if (item.nm == op) {
        returnObj = item.label
      }
    });
    return returnObj
  }


  // convenience getters for easy access to form fields
  get f() {
    return this.filterForm.controls;
  }

  get t() {
    return this.f.queryBuilder as FormArray;
  }

  onReset() {
    // reset whole form back to initial state
    this.filterFormSubmitted = false;
    this.filterForm.reset();
    this.t.clear();
  }

  openModal(id: string) {
    this.modal.open(id);
  }


  closeModal(id: string) {
    this.modal.close(id);
  }

  addQuery() {
    if (this.filterForm.valid) {
      this.t.push(this._formBuilder.group({
        e: [-1, Validators.required],
        fe: [false],
        o: [''],
        f: [''],
        v: [''],
        sT: [new Date()],
        eT: [new Date()]
      }));
    }
  }

  removeQuery(i) {
    if (this.t.length > 0 || i !== 0) {
      this.t.removeAt(i);
    }
    this.prop.splice(i, 1);
  }

  toggleFilter(index) {
    this.t.value[index]['fe'] = !this.t.value[index]['fe'];
  }

  epochToJsDate(ts) {
    return new Date(ts * 1000);
  }

  jsDateToEpoch(d) {
    return (d.getTime() - d.getMilliseconds()) / 1000;
  }

}
