import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DosdormComponent } from './dosdorm.component';

describe('DosdormComponent', () => {
  let component: DosdormComponent;
  let fixture: ComponentFixture<DosdormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DosdormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DosdormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
