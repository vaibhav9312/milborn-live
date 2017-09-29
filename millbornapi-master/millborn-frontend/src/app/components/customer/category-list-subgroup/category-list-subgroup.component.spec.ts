import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListSubgroupComponent } from './category-list-subgroup.component';

describe('CategoryListSubgroupComponent', () => {
  let component: CategoryListSubgroupComponent;
  let fixture: ComponentFixture<CategoryListSubgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryListSubgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListSubgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
