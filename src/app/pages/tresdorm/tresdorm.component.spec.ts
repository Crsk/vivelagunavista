import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresdormComponent } from './tresdorm.component';

describe('TresdormComponent', () => {
  let component: TresdormComponent;
  let fixture: ComponentFixture<TresdormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresdormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresdormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
