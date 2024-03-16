import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaftBoardComponent } from './shaft-board.component';

describe('ShaftBoardComponent', () => {
  let component: ShaftBoardComponent;
  let fixture: ComponentFixture<ShaftBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShaftBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShaftBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
