import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurviverComponent } from './surviver.component';

describe('SurviverComponent', () => {
  let component: SurviverComponent;
  let fixture: ComponentFixture<SurviverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurviverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurviverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
