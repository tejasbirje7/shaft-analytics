import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ModalData} from '../../../utils/interfaces/store-interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-category-upsert-view',
  templateUrl: './category-upsert-view.component.html',
  styleUrls: ['./category-upsert-view.component.scss']
})
export class CategoryUpsertViewComponent implements OnInit {

  categoryForm = new FormGroup({
    'name': new FormControl("",[Validators.required])
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public modalData: ModalData,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
