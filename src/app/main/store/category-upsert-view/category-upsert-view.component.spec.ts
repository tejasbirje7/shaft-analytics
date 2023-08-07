import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryUpsertViewComponent } from './category-upsert-view.component';

describe('CategoryUpsertViewComponent', () => {
  let component: CategoryUpsertViewComponent;
  let fixture: ComponentFixture<CategoryUpsertViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryUpsertViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryUpsertViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
