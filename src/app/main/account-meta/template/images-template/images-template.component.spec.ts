import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesTemplateComponent } from './images-template.component';

describe('ImagesTemplateComponent', () => {
  let component: ImagesTemplateComponent;
  let fixture: ComponentFixture<ImagesTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
