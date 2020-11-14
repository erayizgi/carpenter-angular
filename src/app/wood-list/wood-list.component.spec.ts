import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodListComponent } from './wood-list.component';

describe('WoodListComponent', () => {
  let component: WoodListComponent;
  let fixture: ComponentFixture<WoodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
