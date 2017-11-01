import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupproductsComponent } from './groupproducts.component';

describe('GroupproductsComponent', () => {
  let component: GroupproductsComponent;
  let fixture: ComponentFixture<GroupproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
