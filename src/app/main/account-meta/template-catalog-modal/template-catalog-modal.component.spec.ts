import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCatalogModalComponent } from './template-catalog-modal.component';

describe('TemplateDemoComponent', () => {
  let component: TemplateCatalogModalComponent;
  let fixture: ComponentFixture<TemplateCatalogModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateCatalogModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCatalogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
