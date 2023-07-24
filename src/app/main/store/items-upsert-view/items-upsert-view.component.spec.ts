import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsUpsertViewComponent } from './items-upsert-view.component';

describe('ItemsUpsertView', () => {
  let component: ItemsUpsertViewComponent;
  let fixture: ComponentFixture<ItemsUpsertViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsUpsertViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsUpsertViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
