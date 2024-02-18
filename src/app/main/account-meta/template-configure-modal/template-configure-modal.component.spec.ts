import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateConfigureModalComponent } from './template-configure-modal.component';

describe('TemplateConfigureComponent', () => {
  let component: TemplateConfigureModalComponent;
  let fixture: ComponentFixture<TemplateConfigureModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateConfigureModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateConfigureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
