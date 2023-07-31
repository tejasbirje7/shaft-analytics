import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignSavedComponent } from './campaign-saved.component';

describe('CampaignSavedComponent', () => {
  let component: CampaignSavedComponent;
  let fixture: ComponentFixture<CampaignSavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignSavedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
