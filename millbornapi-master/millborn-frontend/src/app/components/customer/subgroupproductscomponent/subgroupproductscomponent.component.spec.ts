import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgroupproductscomponentComponent } from './subgroupproductscomponent.component';

describe('SubgroupproductscomponentComponent', () => {
  let component: SubgroupproductscomponentComponent;
  let fixture: ComponentFixture<SubgroupproductscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubgroupproductscomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubgroupproductscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
