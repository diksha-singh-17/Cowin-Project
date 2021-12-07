import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPartsComponent } from './blog-parts.component';

describe('BlogPartsComponent', () => {
  let component: BlogPartsComponent;
  let fixture: ComponentFixture<BlogPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
