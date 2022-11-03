import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdByCategoryComponent } from './prod-by-category.component';

describe('ProdByCategoryComponent', () => {
  let component: ProdByCategoryComponent;
  let fixture: ComponentFixture<ProdByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
