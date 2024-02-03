import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateConfigureComponent } from './template-configure.component';

describe('TemplateConfigureComponent', () => {
  let component: TemplateConfigureComponent;
  let fixture: ComponentFixture<TemplateConfigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateConfigureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
