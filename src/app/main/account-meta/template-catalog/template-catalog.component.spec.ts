import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCatalogComponent } from './template-catalog.component';

describe('TemplateCatalogComponent', () => {
  let component: TemplateCatalogComponent;
  let fixture: ComponentFixture<TemplateCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
