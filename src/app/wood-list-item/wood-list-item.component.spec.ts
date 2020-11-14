import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodListItemComponent } from './wood-list-item.component';

describe('WoodListItemComponent', () => {
  let component: WoodListItemComponent;
  let fixture: ComponentFixture<WoodListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
