import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContentsTemplateComponent } from './page-contents-template.component';

describe('PageContentsTemplateComponent', () => {
  let component: PageContentsTemplateComponent;
  let fixture: ComponentFixture<PageContentsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageContentsTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContentsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
