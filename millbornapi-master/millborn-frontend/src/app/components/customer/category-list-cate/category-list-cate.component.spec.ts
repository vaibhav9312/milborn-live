import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListCateComponent } from './category-list-cate.component';

describe('CategoryListCateComponent', () => {
  let component: CategoryListCateComponent;
  let fixture: ComponentFixture<CategoryListCateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryListCateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
